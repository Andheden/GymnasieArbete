const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static("public"));


io.on("connection", socket => {
    console.log("new connection...");

    socket.emit("message", "welcome to the chat");

    socket.broadcast.emit("message", "a user has joined the chat")

    socket.on("disconnect", () => {
        io.emit("message", "A user has left the chat")
    })
    
});


server.listen(1010);
