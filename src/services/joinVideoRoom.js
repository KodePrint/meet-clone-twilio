const Video = require('twilio-video');

const joinVideoRoom = async(
    roomName, token, options={
        "video":false,
        "audio":false
      }
    ) => {
  const room = await Video.connect(token, {
    room: roomName,
    video: options.video,
    audio: options.audio
  });
  return room;
}

export { joinVideoRoom };