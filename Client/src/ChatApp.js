import React, { useState } from "react";
import io from "socket.io-client";
import ChatRoom from "./ChatRoom";

const socket = io.connect("http://localhost:8080");
socket.on("message", (message) => {
  console.log(message);
});

const Chat = () => {
  const [input, setInput] = useState("");
  const [roominp, setRoomInp] = useState("");
  const [showChat, setShowChat] = useState(false);

  const submitHandler = () => {
    socket.emit("joinRoom", roominp);
    setShowChat(true);
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Chat App</h3>
          <input
            className="inp"
            type="text"
            value={input}
            placeholder="username"
            required
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <input
            className="roomInp"
            type="text"
            value={roominp}
            placeholder="Room Name"
            required
            onChange={(e) => {
              setRoomInp(e.target.value);
            }}
          />
          <button onClick={submitHandler} className="btn" type="submit">
            Join A Room
          </button>
        </div>
      ) : (
        <ChatRoom socket={socket} username={input} room={roominp} />
      )}
    </div>
  );
};

export default Chat;
