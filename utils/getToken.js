const AccessToken = require('twilio').jwt.AccessToken;
const {v4: uuidv4} = require('uuid');
const VideoGrant = AccessToken.VideoGrant;

const getAccessToken = (roomName, userName) => {
  // Create an Access Token
  const accessToken = new AccessToken(
    process.env.ACCOUNT_SID,
    process.env.API_KEY_SID,
    process.env.API_KEY_SECRET,

    // Add the identity of the user
    { identity: userName}
  );

  const videoGrant = new VideoGrant({
    room: roomName
  });

  // Add the Video Grant to the Access Token
  accessToken.addGrant(videoGrant);
  // Return the token
  return accessToken.toJwt();
}

module.exports = {getAccessToken};