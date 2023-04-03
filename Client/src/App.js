import "./App.css";
import React, { useState } from "react";
import Chat from "./ChatApp";
import ChatRoom from "./ChatRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat setShowChat={setShowChat} />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
