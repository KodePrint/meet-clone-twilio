//import { joinVideoRoom } from './joinVideoRoom';
import { connect } from './joinVideoRoom';
import { handleConnectParticipant } from "./handlerConnetParticipant";

const startRoom = async(data, options) => {
  const { roomName } = data;
  const url = (`http://localhost:5000/api/v1/room`)
  //   .then(response => response.json())
  //   .then(res => {
  //     console.log(res)
  //   })
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  
  const { token } = await res.json();
  const userInfoRoom = {
    roomName: roomName,
    userName: data.userName,
    options: options,
    token: token
  }

  window.localStorage.setItem(
    'userInfoRoom', JSON.stringify(userInfoRoom)
  );
  
  // return connect();
  // Join the vide room with token
  //const room = await joinVideoRoom(roomName, token, options);
  //return room
  
  // // Render the local and remote participants
  // handleConnectParticipant(room.localParticipant);
  // room.participants.forEach(handleConnectParticipant);
  // room.on('participantConnected', handleConnectParticipant);
};

// const handleConnectParticipant = (participant) => {
//   console.log("participant: ", participant)

//   // Iterate through the participants published tracks
//   participant.tracks.forEach((trackPublication) => {
//     handleTrackPublication(trackPublication, participant);
//   })
  
//   // Listen for any new track publication
//   participant.on('trackPublished', handleTrackPublication);
// }

// const handleTrackPublication = (trackPublication, participant) => {
//   function displayTrack(track) {
//     const trackElement = track.attach();
//     container.appendChild(trackElement);
//   }

//   if (trackPublication.track) {
//     displayTrack(trackPublication.track);
//   }

//   trackPublication.on('subscribed', displayTrack);
// }

// const joinVideoRoom = async(roomName, token, options) => {
//   const room = await Video.connect(token, {
//     room: roomName,
//     video: options.video,
//     audio: options.aduio,
//   });
//   return room;
// }

export {startRoom};