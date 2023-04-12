
import React, { useState, useRef } from 'react';
import Navigation from './Navigation';
const VIDEO_PATH = require('../assets/aguentar-30902.mp4');

const Player = () => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  return (
    <div>
                <Navigation/>

      <video
        onTimeUpdate={handleProgress}
        ref={videoRef}
        width="100%"
        height="100%"
        controls
      >
        <source src={VIDEO_PATH} />
      </video>
    </div>
  );
};

export default Player;

