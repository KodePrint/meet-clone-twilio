import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getParticipants } from '../services/getParticipants'
import ParticipantInfo from '../containers/ParticipantInfo'
import { connect } from '../services/joinVideoRoom'

const Room = (props) => {

  const location = useLocation()
  const {roomName} = useParams()
  const [participantsList, setParticipantsList] = useState([])
  const [userRoomInfo, setUserRoomInfo] = useState({})
  const [camera, setCamera] = useState(true)
  const [microphone, setMicrophone] = useState(true)

  // Effect guet token user
  useEffect(() => {
    const user = window.localStorage.getItem('userInfoRoom')
    const localData = JSON.parse(user)
    setUserRoomInfo(localData)
    setCamera(localData.options.video)
    setMicrophone(localData.options.audio)
  }, [])
  // Effect connet to room
  useEffect(() => {
    if (userRoomInfo.token !== undefined) {
      const room = connect(userRoomInfo.token, userRoomInfo.roomName, userRoomInfo.options)
      room
        .then(room => {
            setParticipantsList(getParticipants(room))  
          }
        )
        .catch(err => {
          console.log(err)
        })
      
    }
  } , [userRoomInfo])


  return (
    <div className="Room">
      <h1>Room: {roomName}</h1>
      {
        participantsList.map(({sid, identity, tracks}) => {
          return (
            <ParticipantInfo 
              key={sid}
              sid={sid}
              identity={identity}
              tracks={tracks}
            />)
        })
      }
      <section className="Room-options">
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
      </section>
    </div>
  );
}

export default Room;