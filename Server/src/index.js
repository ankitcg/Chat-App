const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const port = 8080;

//app.use(express.static(path.join(__dirname, '../public')));

io.on("connection", (socket) => {
  console.log(`User Connected :- ${socket.id}`);

  socket.broadcast.emit("message", `New User Joined :- ${socket.id}`);

  socket.emit("message", "Welcome");

  socket.on("joinRoom", (data) => {
    socket.join(data);
    console.log(`User with Id ${socket.id} connected to ${data}`);
  });

  socket.on("send", (data) => {
    socket.to(data.room).emit('recieveMessage',data)
    //console.log(input);
  });

  socket.on("disconnect", () => {
    io.emit("message", `User Disconnected :- ${socket.id}`);
  });
});

server.listen(port, (err) => {
  if (err) {
    return console.log("Not Connected To Port");
  }
  console.log(`Connected To Port No ${port}`);
});
