const Joi = require('joi');

const roomName = Joi.string().min(3).max(30).required();

const createRoomScheme = Joi.object({
  roomName: roomName.required()
})

module.exports = { createRoomScheme };