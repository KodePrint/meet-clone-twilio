import { handleConnectParticipant } from "./handlerConnetParticipant";
import { joinVideoRoom } from "./joinVideoRoom";


const getParticipants = async(roomName, token, options) => {

  const room = await joinVideoRoom(roomName, token, options)
  
  return room
  await handleConnectParticipant(room.localParticipant)
  return room.on('participantConnected', handleConnectParticipant);
};

export { getParticipants };