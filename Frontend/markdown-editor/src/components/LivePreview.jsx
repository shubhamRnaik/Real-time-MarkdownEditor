import { useEffect, useState } from "react";
import socket from "../sockets/socket-setup";
import '../styles/markdown-style.css'

function LivePreview() {
  const [html, setHtml] = useState("");

  const clearPreview = () => setHtml("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("messageFromServer", (data) => {
      setHtml(data.html);
    });

    return () => {
      socket.off("connect");
      socket.off("messageFromServer");
    };
  }, []);

  return (
    
    <div
    className='boardStyle'
    contentEditable="false"
    suppressContentEditableWarning={true}
  >
    <div 
        className="livePreview-content"
        dangerouslySetInnerHTML={{ __html: html }}
      /> 
      
      <button onClick={()=>{clearPreview()}} className="clear-Btn">clear</button> </div>
  );
}

export default LivePreview;
