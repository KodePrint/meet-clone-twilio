const Joi = require('joi')
const { createProfileScheme, updateProfileScheme, getProfileScheme } = require('./profileSchema')

const id = Joi.number();
const email = Joi.string();
const password = Joi.string().min(6);
const isActive = Joi.boolean();
const isAdmin = Joi.boolean();
const timestamp = +new Date();;
const profile = Joi.object();


const createUserScheme = Joi.object({
  email: email.required(),
  password: password.required(),
  name: Joi.string().required(),
})

const updateUserScheme = Joi.object({
  email: email.optional(),
  password: password.optional(),
  name: Joi.string().optional(),
  updated: timestamp,
})

const getUserScheme = Joi.object({
  id: id.required(),
})

module.exports = { createUserScheme, updateUserScheme, getUserScheme }