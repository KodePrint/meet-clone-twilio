const {findOrCreateRoom} = require('../utils/findOrCreateRoom');
const {getAccessToken} = require('../utils/getToken');

class RoomServices {
  constructor() {}

  // Create a romm
  async createRoom(data) {
    let { roomName } = data;
    await createRoom(roomName);
    return {'message': 'Room created'};
  }
};

module.exports = RoomServices