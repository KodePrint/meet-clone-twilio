const boom = require('boom');
const { models } = require('../utils/squelize/sequelize');

class ProfileServices {

  // Create one
  async create(body) {
  }

  // Get all
  async getAll(body) {
    const profiles = await models.profile.findAll();
    return profiles;
  }

  // Get one
  async getByEmail(name) {
    const profile = await models.profile.findOne({
      attributes: ['id', 'name', 'image', 'phone'],
      include: [{
        association: 'user',
        attributes: ['id', 'email'],
      }],
      where: {name}
    })
    return profile;
  }

  async getById(id) {
    const profile = await models.profile.findByPk(id, {
      attributes: ['id', 'name', 'image', 'phone'],
      include: [{
        association: 'user',
        attributes: ['id', 'email'],
      }],
    })
    return profile
  }

  // Update one
  async update(id, changes) {
    // Get a old profile instance
    const oldprofile = await models.profile.findByPk(id);
    // Update the profile
    await oldprofile.update(changes);
    // get a new profile instance
    const profileUpdate = await this.getById(id);
    return {
      message: `profile with email: ${profileUpdate.name} has ben updated successfull..!`,
      profileUpdate
    }
  }

  // Logic Delete one
  async LogicDelete(id) {
    // Get a profile Instance
    const profile = await models.profile.findByPk(id);
    // Change Value is_active to false
    await profile.update({is_active: false});
    return {
      message: `profile with email: ${profile.name} has ben deactivate successfull..!`
    }
  }

  // Delete
  async Delete(id) {
    // Get a profile Instance
    const profile = await models.profile.findByPk(id);
    // save the profile email instance
    let name = await profile.getDataValue('name');
    // Delete the profile
    await profile.destroy();
    return {
      message: `profile with email: ${name} has ben deleted on DataBase successfull..!`
    }
  }
}

module.exports = ProfileServices;