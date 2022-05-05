import React from 'react'
import { useParams } from 'react-router-dom'

const Room = (props) => {
  const {roomName} = useParams()
  
  return (
    <div className="Room">
      <h1>Room: {roomName}</h1>
    </div>
  );
}

export default Room;