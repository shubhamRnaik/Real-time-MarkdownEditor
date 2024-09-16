import {  useEffect } from "react";
import "./styles/reset.css";
import socket from "./sockets/socket-setup";
import Markdown from "./services/Markdown";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("messageFromServer", (data) => {
      console.log("Message from server:", data);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    return () => {
      socket.off("connect");
      socket.off("messageFromServer");
      socket.off("disconnect");
    };
  }, []);

  return (
    <>
      <Markdown />
    </>
  );
}

export default App;
