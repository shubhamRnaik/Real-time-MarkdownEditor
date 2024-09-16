const http = require("http");
const socketIO = require("socket.io");
const express = require("express");
const bodyParser = require("body-parser");
const { marked } = require("marked");
const cors = require("cors");
const Prism = require("prismjs");
require("prismjs/components/prism-javascript");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

io.on("connection", (socket) => {
  console.log("SERVER CONNECTED");

  socket.onAny((eventName, ...args) => {
    console.log(`WebSocket Event: ${eventName}`, args);
  });

  socket.on("connect", () => {
    console.log("Connection attempt made");
  });

  socket.on("messageFromClient", (data) => {
    console.log("Received Markdown from client:", data);
    const html = marked(data.message, {
      highlight: (code, language) => {
        return Prism.highlight(
          code,
          Prism.languages[language] || Prism.languages.javascript,
          language
        );
      },
    });
    socket.emit("messageFromServer", { html });
  });


  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
