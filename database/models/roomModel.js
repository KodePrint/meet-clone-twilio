const { Model, DataTypes, Sequelize } = require('sequelize')
const {USER_TABLE} = require('./userModel')

const ROOM_TABLE = 'rooms';

const RoomSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  userId: {
    field: 'user_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
  },
  sid: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 250,
  },
  name: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 75,
    set(value) {
      this.setDataValue('name', value.toLowerCase())
    }
  },
  maxParticipants: {
    allowNull: false,
    field: 'max_participants',
    type: DataTypes.INTEGER
  },
  maxDuration: {
    allowNull: false,
    field: 'max_duration',
    type: DataTypes.INTEGER
  },
  maxTracks: {
    allowNull: false,
    field: 'max_tracks',
    type: DataTypes.INTEGER
  },
  sid: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 250,
  },
  url: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 250,
  },
  recordingsUrl: {
    allowNull:false,
    type: DataTypes.STRING,
    field: 'recordings_url',
    max: 250,
  },
  participantsUrl: {
    allowNull:false,
    type: DataTypes.STRING,
    field: 'participants_url',
    max: 250,
  },
  rulesUrl: {
    allowNull:false,
    type: DataTypes.STRING,
    field: 'rules_url',
    max: 250,
  },
  created: {
    allowNull:true,
    type: DataTypes.DATE,
    field: 'created',
    defaultValue: Sequelize.NOW
  },
  updated: {
    allowNull:true,
    type: DataTypes.DATE,
    field: 'updated',
    defaultValue: Sequelize.NOW
  }
}

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