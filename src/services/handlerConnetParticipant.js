import { handleTrackPublication } from "./handleTrackPublication";

const handleConnectParticipant = (participant) => {
  
  // Iterate through the participants published tracks
  participant.tracks.forEach((trackPublication) => {
    handleTrackPublication(trackPublication, participant);
  })

  // Listen for any new track publication
  participant.on('trackPublished', handleTrackPublication);
}

export { handleConnectParticipant };