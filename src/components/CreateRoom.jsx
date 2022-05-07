import React, { useState, useEffect } from 'react'
import { startRoom } from '../services/startRoom'
import { useNavigate } from 'react-router-dom'
import { createLocalVideoTrack } from 'twilio-video'

const CreateRoom = () => {
  
  // Redirect RouterDom
  let navigate = useNavigate()

  // States
  const [camera, setCamera] = useState(true)
  const [microphone, setMicrophone] = useState(true)
  const [roomData, setRoomData] = useState({
    roomName: '',
    userName: '',
  })
  const [startRoomBtn, setStartRoomBtn] = useState(true)
  
  // Effects
  useEffect(() => {
    if (roomData.roomName != '' && roomData.userName != '') {
      setStartRoomBtn(false)
    } else {
      setStartRoomBtn(true)
    }
  } , [roomData])

  const handleChangeRoomData = (e) => {
    if (e.target.name === 'roomName') {
      setRoomData({
        ...roomData,
        roomName: e.target.value  
      })
    }else {
      setRoomData({
        ...roomData,
        userName: e.target.value  
      })
    }
  }

  const handleStartRoom = (event) => {
    event.preventDefault()
    const data = {
      roomName: roomData.roomName,
      userName: roomData.userName,
    }
    const options = {
      video: camera,
      audio: microphone,
    }
    startRoom(data, options)

    const video = document.getElementById('local-media');
    video.innerText = 'Loading...'
    createLocalVideoTrack().then(track => {
      console.log("track: ", track)
      video.appendChild(track.attach());
    }).catch(err => {
      console.log(err)
    });

    // navigate(`/room/${roomData.roomName}`, {state:options})
  }


  return (
    <>
      <div id='local-media'></div>
      <form className='CreateRoom'>
        <div className='row'>
          <label htmlFor='roomName'>Room Name:</label>
          <input 
            onChange={handleChangeRoomData}
            type='text'
            id='roomName' 
            name='roomName' 
          />
        </div>
          
        <div className='row'>
          <label htmlFor='userName'>User Name:</label>
          <input
            onChange={handleChangeRoomData}
            type='text'
            id='userName'
            name='userName'  
          />
        </div>
        <div className='options'>
          <button 
            type='button' 
            onClick={() => setCamera(!camera)} 
            className={camera ? 'active' : ''}>
              {
                camera 
                  ? <i className="uil uil-video"></i> 
                  : <i className="uil uil-video-slash"></i>
              }
          </button>
          <button 
            type='button' 
            onClick={() => setMicrophone(!microphone)} 
            className={microphone ? 'active' : ''}>
              { microphone
                ? <i className="uil uil-microphone"></i>
                : <i className="uil uil-microphone-slash"></i> 
              }
          </button>
        </div>
        <button 
          className='submit-btn'
          disabled={startRoomBtn}
          onClick={handleStartRoom}>
            Start Room
        </button>
      </form>
    </>
  );
}

export default CreateRoom;