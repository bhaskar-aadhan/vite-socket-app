import io from "socket.io-client";
import './App.css';
import { useEffect, useState } from "react";
const socket = io.connect("http://localhost:5174");

const App = () => {
  const[ message, setMessage ] = useState("")
  const[ messageReceived, setMessageReceived ] = useState("")
 
  const sendMessage = ()=>{
    socket.emit("client_message", { message: message })
  }
  useEffect(()=>{
    socket.on("receive_message", (data)=>{
      setMessageReceived(data.message)
    })
  }, [])

  return (
    <div>
      <input type="text" placeholder='Message.....' onChange={(e)=>setMessage(e.target.value)} />
      <button onClick={sendMessage} className=''>send message</button>
      <br /><br /><br />
      <h3>Message Received: {messageReceived}</h3>
    </div>
  )
}

export default App