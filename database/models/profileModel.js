const {Model, DataTypes, Sequelize} = require('sequelize');
const { USER_TABLE } = require('./userModel')

const PROFILE_TABLE = 'profiles';

const ProfileSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 75,
    set(value) {
      this.setDataValue('name', value.toLowerCase())
    }
  },
  image: {
    allowNull:true,
    type: DataTypes.STRING,
    max: 255
  },
  phone: {
    allowNull:true,
    type: DataTypes.STRING,
    max: 15
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
        model: USER_TABLE,
        key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
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

class Profile extends Model {
  static associate(models) {
      this.belongsTo(models.User, {as: 'user'})
  }

  static config(sequelize) {
    return {
        sequelize,
        tableName: PROFILE_TABLE,
        modelName: 'Profile',
        timestamps: false
    }
  }
}

module.exports = { PROFILE_TABLE, ProfileSchema, Profile }