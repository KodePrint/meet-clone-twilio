const {Pool} = require('pg')
const {globalconfigs} = require('../../config/global.config')

const options = {};

if (globalconfigs.isProd) {
    options.connectionString = globalconfigs.dbUrl;
    options.dialect = 'postgres',
    options.dialectOptions = {ssl: {require:true, rejectUnauthorized:false}}
}


const pool = new Pool(options);

module.exports = pool;