import React from "react";
import Player from "./player";
import Navigation from "./Navigation";
import Footer from "./footer";
import DarkMode from "./darkMode";
import CommentBox from "./CommentBox";
const Play = () => {
  return (
    <div>
        <Navigation/>
        <DarkMode/>
 <Player />
 <CommentBox/>
 <Footer/>      
    </div>
  );
};

export default Play;