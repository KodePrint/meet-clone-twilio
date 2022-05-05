require('dotenv').config();
const {v4: uuidv4} = require('uuid');
const AccessToken = require('twilio').jwt.AccessToken;
const express = require('express');
const { TokenInstance } = require('twilio/lib/rest/api/v2010/account/token');
const cors = require('cors')
const routerApi = require('./routes')

const VideoGrant = AccessToken.VideoGrant;

// Settigs API WhiteList
const whitelist = ['http://localhost:5500','http://localhost:3005',]

const app = express();
const port = 5000;
app.use(express.json());

// Cors
const option = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors());

//Routes
routerApi(app);

// Create the Client
const twilioClient = require('twilio')(
  process.env.API_KEY_SID,
  process.env.API_KEY_SECRET,
  {accountSid: process.env.ACCOUNT_SID}
);

// Create a Room
const findOrCreateRoom = async (roomName) => {
  try {
    // Check if the room exists, otherwise it throws an error 20404
    await twilioClient.video.rooms(roomName).fetch();
  } catch (error) {
    if ( error.code == 20404 ) {
      // If it does not find the room, it proceeds to create a
      return await twilioClient.video.rooms.create({
        uniqueName: roomName,
        type:"go"
      });
    } else {
      // Call to error
      throw error;
    }
  }
}

// Create a Token
const getAccessToken = (roomName) => {
  // Create an Access Token
  const accessToken = new AccessToken(
    process.env.ACCOUNT_SID,
    process.env.API_KEY_SID,
    process.env.API_KEY_SECRET,

    // Add the identity of the user
    { identity: uuidv4()}
  );

  const videoGrant = new VideoGrant({
    room: roomName
  });

  // Add the Video Grant to the Access Token
  accessToken.addGrant(videoGrant);
  // Return the token
  return accessToken.toJwt();
}

// Route
app.get("/join-room", async (req, res) => {
  res.json({'message': 'This is a server'})
});
app.post("/join-room", async (req, res) => {
  // Return 404 to empty body
  if (!req.body || !req.body.roomName) {
    return res.status(404).send('No room name provided');
  }
  const roomName = req.body.roomName;
  // Find or create the room
  const room = findOrCreateRoom(roomName);
  room.then(item => console.log(item.url))
  //generate the AccessToken fot participant
  const token = getAccessToken(roomName);
  res.send({
    token: token,
    room: room
  });
});

// Middlewares


// Start the Server
app.listen(port, () => {
  console.log(`Server Express runing on port ${port}`);
})