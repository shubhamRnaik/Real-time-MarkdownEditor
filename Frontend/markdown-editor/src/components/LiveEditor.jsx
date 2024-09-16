import { useEffect, useState } from 'react';
import socket from '../sockets/socket-setup';
import '../styles/markdown-style.css';

function LiveEditor() {
  const [markDown, setMarkDown] = useState("");

  useEffect(() => {
    // Establish the socket connection
    socket.on("connect", () => {
      console.log("Socket Connection is Established");
    });

    // Emit the message to the server whenever markDown changes
    socket.emit('messageFromClient', { message: markDown });

    // Clean up the socket connection when component unmounts
    return () => {
      socket.off('connect');
    };
  }, [markDown]);

  return (
    <div
      className='boardStyle'
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={(e) => setMarkDown(e.target.innerText)} // Capture the input here
    >
      
    </div>
  );
}

export default LiveEditor;
