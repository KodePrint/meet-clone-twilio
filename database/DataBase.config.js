const {globalconfigs} = require('../config/global.config');

console.log(globalconfigs.dbDevUrl);

module.exports = {
  development: {
    url: globalconfigs.dbDevUrl,
    dialect: 'postgres'
  },
  production: {
    url: globalconfigs.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized:false
      }
    }
  }
}