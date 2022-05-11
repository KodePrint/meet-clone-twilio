const { createNewRoom, findExistsRoom } = require('../utils/RoomUtils');
const {getAccessToken} = require('../utils/getToken');

class RoomServices {
  constructor() {}

  // Create a romm
  async createRoom(data) {
    let { roomName, userName } = data;
    const room = await createNewRoom(roomName);
    // const token = await getAccessToken(roomName, userName)
    console.log(room)
    return room;
  };
  
  // Get a room
  async getRoom(data) {
    let { roomName, userName } = data;
    const room = await findExistsRoom(roomName);
    return room;
  };

};



module.exports = RoomServices