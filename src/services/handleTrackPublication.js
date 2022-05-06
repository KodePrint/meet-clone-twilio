const handleTrackPublication = (trackPublication, participant) => {
  function displayTrack(track) {
    const trackElement = track.attach();
    container.appendChild(trackElement);
  }

  if (trackPublication.track) {
    displayTrack(trackPublication.track);
  }

  trackPublication.on('subscribed', displayTrack);
}

export { handleTrackPublication };