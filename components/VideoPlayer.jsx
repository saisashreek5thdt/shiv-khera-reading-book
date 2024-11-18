import React from "react";

function VideoPlayer({src}) {
  return (
    <>
      <video
        className="w-full max-w-2xl rounded-lg shadow-lg"
        controls
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default VideoPlayer;