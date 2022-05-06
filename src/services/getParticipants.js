import { handleConnectParticipant } from "./handlerConnetParticipant";
//import { joinVideoRoom } from "./joinVideoRoom";


const getParticipants = (room) => {
  const participants = [];
  participants.push(room.localParticipant);
  room.participants.forEach(participant => {
    participants.push(participant);
  })
  return participants
};

export { getParticipants };