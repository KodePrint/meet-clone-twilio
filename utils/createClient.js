const twilioClient = require('twilio')(
  process.env.API_KEY_SID,
  process.env.API_KEY_SECRET,
  {accountSid: process.env.ACCOUNT_SID}
);

module.exports = {twilioClient};