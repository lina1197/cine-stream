import React from "react";
import Player from "./player";
import Navigation from "./Navigation";
import Footer from "./footer";
import DarkMode from "./darkMode";
import CommentSection from "./CommentSection";
const Play = () => {
  return (
    <div>
        <Navigation/>
        <DarkMode/>
 <Player />
 <CommentSection/>
 <Footer/>      
    </div>
  );
};

export default Play;