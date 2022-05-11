'use strict';

const { USER_TABLE, UserSchema } = require('../models/userModel');
const { PROFILE_TABLE, ProfileSchema } = require('../models/profileModel');
const { ROOM_TABLE, RoomSchema } = require('../models/roomModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PROFILE_TABLE, ProfileSchema);
    await queryInterface.createTable(ROOM_TABLE, RoomSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
    await queryInterface.dropTable(ROOM_TABLE, RoomSchema);
  }
};
