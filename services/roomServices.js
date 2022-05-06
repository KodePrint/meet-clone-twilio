const findOrCreateRoom = require('../utils/findOrCreateRoom');
const {getAccessToken} = require('../utils/getToken');

class RoomServices {
  constructor() {}

  // Create a romm
  async createRoom(data) {
    let { roomName, userName } = data;
    const room = await findOrCreateRoom(roomName);
    const token = await getAccessToken(roomName, userName)
    return {room, token};
  }
};

module.exports = RoomServices