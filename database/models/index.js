const {UserSchema, User} = require('./userModel');
const {ProfileSchema, Profile} = require('./profileModel');
const {RoomSchema, Room} = require('./roomModel');

function setUpModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Profile.init(ProfileSchema, Profile.config(sequelize));
  Room.init(RoomSchema, Room.config(sequelize));

  // Associations
  User.associate(sequelize.models)
  Profile.associate(sequelize.models)
  Room.associate(sequelize.models)
}

module.exports = setUpModels