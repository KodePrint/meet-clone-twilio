const Joi = require('joi')

const id = Joi.number();
const name = Joi.string();
const image = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();
const timestamp = +new Date();

const createProfileScheme = Joi.object({
  name: name.required(),
  image: image.optional(),
  phone: phone.optional(),
  userId: userId.required(),
})

const updateProfileScheme = Joi.object({
  id: id.optional(),
  name: name.optional(),
  image: image.optional(),
  phone: phone.optional(),
})

const getProfileScheme = Joi.object({
  id: id.required(),
})

module.exports = { createProfileScheme, updateProfileScheme, getProfileScheme };
