const Joi = require('joi')
const { createProfileScheme, updateProfileScheme, getProfileScheme } = require('./profileSchema')

const id = Joi.number();
const email = Joi.string();
const password = Joi.string();
const isActive = Joi.boolean();
const isAdmin = Joi.boolean();
const timestamp = +new Date();;
const profile = Joi.object();


const createUserScheme = Joi.object({
  email: email.required(),
  password: password.required(),
  profile: createProfileScheme.optional(),
})

const updateUserScheme = Joi.object({
  email: email.optional(),
  password: password.optional(),
  profile: updateProfileScheme.optional(),
  updated: timestamp,
})

const getUserScheme = Joi.object({
  id: id.required(),
})

module.exports = { createUserScheme, updateUserScheme, getUserScheme }