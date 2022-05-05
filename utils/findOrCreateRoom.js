const {twilioClient} = require('./createClient')

const findOrCreateRoom = async (roomName) => {
  try {
    // Check if the room exists, otherwise it throws an error 20404
    await twilioClient.video.rooms(roomName).fetch();
  } catch (error) {
    if ( error.code == 20404 ) {
      // If it does not find the room, it proceeds to create a
      return await twilioClient.video.rooms.create({
        uniqueName: roomName,
        type:"go"
      });
    } else {
      // Call to error
      throw error;
    }
  }
}

module.exports = findOrCreateRoom