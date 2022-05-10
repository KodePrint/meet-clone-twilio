const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true,
    set(value) {
      this.setDataValue('email', value.toLowerCase())
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    min: 6
  },
  isActive: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active',
  },
  isAdmin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_admin',
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
  }
}

class User extends Model {

  static associate(models) {
    // Associate with Profile
    this.hasOne(models.Profile, {
      as: 'profile',
      foreignKey: 'userId'
    });
    // Associate with Rooms
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timstamps: false,
    }
  }
}

module.exports = {User, UserSchema, USER_TABLE};