import createRoom from "../utils/createRoom";

class RoomServices {
  constructor() {}

  // Create a romm
  async createRoom(data) {
    let { roomName } = data;
    await createRoom(roomName);

  }
};

module.exports = RoomServices