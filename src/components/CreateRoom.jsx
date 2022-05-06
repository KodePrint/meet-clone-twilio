import React, { useRef, useState } from 'react'
import { startRoom } from '../services/startRoom'
import { useNavigate } from 'react-router-dom'

const CreateRoom = () => {

  const [camera, setCamera] = useState(true)
  const [microphone, setMicrophone] = useState(true)

  let navigate = useNavigate()
  const form = useRef(null);

  const handleStartRoom = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      roomName: formData.get('roomName'),
      userName: formData.get('userName'),
    }
    const options = {
      video: camera,
      audio: microphone,
    }
    startRoom(data, options)
    navigate(`/room/${formData.get('roomName')}`, {state:options})
  }


  return (
    <form ref={form}>
      <div className='row'>
        <label htmlFor='roomName'>Room Name:</label>
        <input type='text' id='roomName' name='roomName' />
      </div>
        
      <div className='row'>
        <label htmlFor='userName'>User Name:</label>
        <input type='text' id='userName' name='userName' />
      </div>
      <div className='options'>
        <button type='button' onClick={() => setCamera(!camera)} className={camera ? 'active' : ''}>
          {
            camera 
              ? <i className="uil uil-video"></i> 
              : <i className="uil uil-video-slash"></i>
          }
          
        </button>
        <button type='button' onClick={() => setMicrophone(!microphone)} className={microphone ? 'active' : ''}>
          { microphone
            ? <i className="uil uil-microphone"></i>
            : <i className="uil uil-microphone-slash"></i> 
          }
        </button>
      </div>
      <button onClick={handleStartRoom}>Start Room</button>
    </form>
  );
}

export default CreateRoom;