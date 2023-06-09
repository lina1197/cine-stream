import "../../src/styles/home.css";
import Navigation from "./Navigation";
import DarkMode from "./darkMode";
import Footer from "./footer";
import StreamCard from "./streamCard";

const streamData = [{
  title: 'Friends',
  poster: '/images/poster4.jpg',
  description: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
  type: 'TV show',
  releaseDate: '1994',
  duration: '22-25m per episode',
},
{
  title: 'Black Mirror',
  poster: '/images/poster5.jpg',
  description: 'An anthology series exploring a twisted, high-tech world where humanity\'s greatest innovations and darkest instincts collide.',
  type: 'TV show',
  releaseDate: '2011',
  duration: '41-89m per episode',
},
{
  title: 'Money Heist',
  poster: '/images/poster6.jpg',
  description: 'A group of very peculiar robbers have assaulted the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and taking home 2,400 million euros.',
  type: 'TV show',
  releaseDate: '2017',
  duration: '41-70m per episode',
},
{
title: 'Chernobyl',
poster: '/images/poster7.jpg',
description:
"In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
type: 'TV show',
releaseDate: '2019',
duration: '60m'
},
{title: 'The Crown',
poster: '/images/poster8.jpg',
description: "A historical drama series that traces the reign of Queen Elizabeth II from her ascension to the throne in 1952 to the present day.",
type: 'TV show',
releaseDate: '2016',
duration: '47-61m per episode'},
 
];

function TvShows() {
  return (

    <div>
 <Navigation 
        />
      <DarkMode/>
      <div style={{textAlign:"center",fontWeight:"bolder"}}><h1 style={{fontWeight:"bolder"}}>Our selection of Tv Shows:</h1></div>
       <div className="stream-grid">
      {streamData.map((stream) => (
        <StreamCard key={stream.title} stream={stream} />
      ))}
    </div>    
      <Footer/>

    </div>
  )}
  export default TvShows;