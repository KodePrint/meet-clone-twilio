import { options } from 'joi';

const Video = require('twilio-video');

// const joinVideoRoom = async(
//     roomName, 
//     token, 
//     options={
//         "video":false,
//         "audio":false
//       }
//   ) => 
//   {
//     const room = await Video.connect(token, {
//         room: roomName,
//         video: options.video,
//         audio: options.audio
//       });
//     return room;
// }

const connect = async (token, roomName, options) => {
  return  await Video.connect(
    token, {
      name : roomName,
      video: options.video,
      audio: options.audio,
    }
  )
};

// export { joinVideoRoom };
export { connect };