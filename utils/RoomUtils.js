const {twilioClient} = require('./createClient')
const boom = require('@hapi/boom')

const createNewRoom = async (roomName) => {
  try {
    const room = await twilioClient.video.rooms.create({
      uniqueName: roomName,
    });
    return room;
  } catch (error) {
    throw boom.badRequest(error);	
  }
}

const findExistsRoom = async (roomName) => {
  try {
    const room = await twilioClient.video.rooms(roomName).fetch();
    return room;
  } catch (error) {
    if ( error.code == 20404 ) {
      throw boom.notFound(error);
    } else {
      throw boom.badRequest(error);
    }
  }
}

// const findOrCreateRoom = async (roomName) => {
//   try {
//     // Check if the room exists, otherwise it throws an error 20404
//     const room = await twilioClient.video.rooms(roomName).fetch();
//     return room;
//   } catch (error) {
//     if ( error.code == 20404 ) {
//       // If it does not find the room, it proceeds to create a
//       return await twilioClient.video.rooms.create({
//         uniqueName: roomName,
//       });
//     } else {
//       // Call to error
//       throw error;
//     }
//   }
// }

module.exports = { createNewRoom, findExistsRoom }