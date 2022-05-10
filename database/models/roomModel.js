const { Model, DataTypes, Sequelize } = require('sequelize')
const {USER_TABLE} = require('./userModel')

const ROOM_TABLE = 'rooms';

const RoomSchema = {}

class Room extends Model {
  static associate(models) {
    // Associate with User
    this.belongsTo(models.User, {as: 'user'});
  }
  
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROOM_TABLE,
      modelName: 'Room',
      timestamps: false
    }
  }

}

module.exports = { Room, RoomSchema, ROOM_TABLE }