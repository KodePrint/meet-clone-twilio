//const { configs } = requier('eslint-plugin-prettier')
require('dotenv').config();

const globalconfigs = {
  env: process.env.Node_Env || 'dev',
  isProd: process.env.Node_Env === 'production',
  port: process.env.PORT || 3000,
  // DB configs
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'test',
  dbPassword: process.env.DB_PASSWORD || '',
  dbUser: process.env.DB_USER || 'root',
  dbPort: process.env.DB_PORT || 3306,
  // Production configs
  dbUrl: process.env.DB_URL,

  apiKey: process.env.API_KEY,
  dbDevUrl: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  // JWT configs
  secretJWT: process.env.SECRET_JWT,
  expiresIn: process.env.EXPIRE_JWT,
  secretRefreshJWT: process.env.SECRET_REFRESH_JWT,
  expiresRefreshJWT: process.env.EXPIRE_REFRESH_JWT,
  // Twilio configs
  accountSID_twilio: process.env.ACCOUNT_SID,
  apiKeySID_twilio: process.env.API_KEY_SID,
  apiKeySecret_twilio: process.env.API_KEY_SECRET,
  // Google configs
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_CLIENT_SECRET,
  // Github configs
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubSecret: process.env.GITHUB_CLIENT_SECRET
}
console.log(globalconfigs.dbDevUrl)
module.exports = {globalconfigs}