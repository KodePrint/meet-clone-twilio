import React, { useRef, useState } from 'react'
import { startRoom } from '../services/startRoom'
import { useNavigate } from 'react-router-dom'

const CreateRoom = () => {
  let navigate = useNavigate()
  const form = useRef(null);

  const handleStartRoom = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    startRoom(formData.get('roomName')).then(res => console.log(res))
    navigate(`/room/${formData.get('roomName')}`)
  }


  return (
    <form ref={form}>
      <div className='row'>
        <label htmlFor='roomName'>Room Name:</label>
        <input type='text' id='roomName' name='roomName' />
      </div>
        
      <div className='row'>
        <label htmlFor='roomName'>User Name:</label>
        <input type='text' id='userName' name='userName' />
      </div>
      <div className='options'>
        <button type='radio' value={true} className='camera active'>
          <i className="uil uil-video"></i>
        </button>
        <button type='radio' value={true} className='microphone active'>
          <i className="uil uil-microphone"></i>
        </button>
      </div>
      <button onClick={handleStartRoom}>Start Room</button>
    </form>
  );
}

export default CreateRoom;