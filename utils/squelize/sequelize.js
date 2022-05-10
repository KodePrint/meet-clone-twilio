const {Sequelize} = require('sequelize')
const {globalconfigs} = require('../../config/global.config')
const setUpModels = require('../../database/models/index')

const options = {
  dialect: 'postgres',
  loggin: globalconfigs.isProd ? false : true,
}

console.log('Production: ', globalconfigs.isProd)

if (globalconfigs.isProd) {
  options.ssl = false
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

if (globalconfigs.isProd) {
  const sequelize = new Sequelize(globalconfigs.dbUrl, options)
  setUpModels(sequelize)
  module.exports = sequelize
} else {
  const sequelize = new Sequelize(globalconfigs.dbDevUrl, options)
  setUpModels(sequelize)
  module.exports = sequelize
}