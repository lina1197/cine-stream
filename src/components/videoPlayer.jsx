import ReactPlayer from 'react-player';
import "../../src/styles/home.css";

import React, { useRef } from 'react';
import Navigation from './Navigation';
const VIDEO_PATH = require('../assets/aguentar-30902.mp4');
function VideoPlayer() {
   const playerRef = useRef(null);
   return (
      <div>
        <Navigation/>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
   )
};
export default VideoPlayer;


