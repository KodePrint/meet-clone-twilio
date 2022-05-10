'use strict';

const { USER_TABLE, UserSchema } = require('../models/userModel');
const { PROFILE_TABLE, ProfileSchema } = require('../models/profileModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PROFILE_TABLE, ProfileSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
  }
};
