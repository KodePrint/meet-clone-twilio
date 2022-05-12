const bcrypt = require('bcryptjs');
const boom = require('@hapi/boom');
const { models } = require('../utils/squelize/sequelize');

class UserServices {

  hash_password(password) {
    const newPassword = bcrypt.hash(password, 10);
    return newPassword
  }

  // Create one
  async create(body) {
    // Hashin a password
    body.password = await this.hash_password(body.password);
    // Create a user
    const newUser = await models.User.create(body);
    const newProfile = await models.Profile.create(
      {
        name: body.name,
        userId: newUser.id
      }
    );

    const user = await this.getById(newUser.id);
    
    return {
      "message": 'User created',
      "user": user,
    };
  }

  // Get all
  async getAll() {
    const users = await models.User.findAll({
      attributes: ['id', 'email', 'password', 'is_active', 'is_admin'],
      include: [{
        association: 'profile',
        attributes: ['name', 'image'],
      }],
    })
    return users;
  }

  // Get one
  async getByEmail(email) {
    const user = await models.User.findOne({
      attributes: ['id', 'email', 'password', 'is_active', 'is_admin'],
      include: [{
        association: 'profile',
        attributes: ['id', 'name', 'image', 'phone'],
      }],
      where: {email}
    })
    return user;
  }

  async getById(id) {
    const user = await models.User.findByPk(id, {
      attributes: ['id', 'email', 'password', 'is_active', 'is_admin'],
      include: [{
        association: 'profile',
        attributes: ['id', 'name', 'image', 'phone'],
      }]
    })
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user
  }

  // Update one
  async update(id, changes) {
    // Check the user change the password
    if (changes.password) {
      // Hashin a password
      body.password = this.hash_password(body.password);
    }
    // Get a old user instance
    const oldUser = await models.User.findByPk(id);
    // Update the user
    await oldUser.update(changes);
    // get a new user instance
    const userUpdate = await this.getById(id);
    return {
      message: `User with email: ${userUpdated.email} has ben updated successfull..!`,
      userUpdated
    }
  }

  // Logic Delete one
  async LogicDelete(id) {
    // Get a user Instance
    const user = await models.User.findByPk(id);
    // Change Value is_active to false
    await user.update({is_active: false});
    return {
      message: `User with email: ${user.email} has ben deactivate successfull..!`
    }
  }

  // Delete
  async Delete(id) {
    // Get a user Instance
    const user = await models.User.findByPk(id);
    // save the user email instance
    let email = await user.getDataValue('email');
    // Delete the user
    await user.destroy();
    return {
      message: `User with email: ${email} has ben deleted on DataBase successfull..!`
    }
  }
}

module.exports = UserServices;