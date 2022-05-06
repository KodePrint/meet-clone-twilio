const Joi = require('joi');

const roomName = Joi.string().min(3).max(30).required();
const userName = Joi.string().min(3).max(30).required();

const createRoomScheme = Joi.object({
  roomName: roomName.required(),
  userName: userName.required()
})

const getRoomScheme = Joi.object({
  roomName: roomName.required(),
})

module.exports = { createRoomScheme, getRoomScheme };