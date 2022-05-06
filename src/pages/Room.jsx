import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getParticipants } from '../services/getParticipants'
import ParticipantInfo from '../containers/ParticipantInfo'

const Room = (props) => {

  const location = useLocation()
  const {roomName} = useParams()
  const [participantsList, setParticipantsList] = useState([])
  const [userRoomInfo, setUserRoomInfo] = useState({})


  useEffect(() => {
    const data = window.localStorage.getItem('userInfoRoom') 
    if (data) {
      const UserRoomInfo = JSON.parse(data)
      setUserRoomInfo(UserRoomInfo)
    }
    const participants = getParticipants(
        userRoomInfo.roomName, 
        userRoomInfo.token,
        userRoomInfo.options
      )
    participants.then(users => setParticipantsList(users))
  }, [])

  console.log(userRoomInfo)

  
  return (
    <div className="Room">
      <h1>Room: {roomName}</h1>
      {/* {
        participantsList.map(user => {
          return (<ParticipantInfo/>)
        })
      } */}
    </div>
  );
}

export default Room;