// import React from "react";
// import "../../src/styles/home.css";

// import Player from "./player";
// import Navigation from "./Navigation";
// import DarkMode from "./darkMode";
// import Footer from "./footer";
// import CommentBox from "./commentSection";
// const View = () => {
//   return (
//     <div>
//                 <Navigation/>

//         <Player/>
//         <CommentBox/>

//         <Footer/>


//     </div>);};
//     export default View;

import React from "react";
import SliderSyncing from "./slider.jsx";
// import DarkMode from "./darkMode.jsx";
import SliderSyncingDarkMode from "./sliderDarkMode.jsx";
import Footer from "./footer.jsx";

const View = () => {
  return (
    <div>
 <SliderSyncingDarkMode />      
    </div>
  );
};

export default View;
