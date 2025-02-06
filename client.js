const chatForm = document.getElementById("chatForm");

const socket = io();


socket.on("message", message => {
    console.log(message);
});