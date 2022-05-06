const { createLocalVideoTrack } = require('twilio-video');

const preview = createLocalVideoTrack().then(track => {
  const video = document.getElementById('local-media');
  console.log("track: ", track)
  video.appendChild(track.attach());
}).catch(err => {
  console.log(err)
});

export { preview };