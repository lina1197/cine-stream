
import "../../src/styles/home.css";
import Navigation from "./Navigation";
import DarkMode from "./darkMode";
import Footer from "./footer";
import StreamCard from "./streamCard";
const streamData = [
  {
    title: 'The Godfather',
    poster: '/images/poster3.jpg',
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      type:'Movie',
      releaseDate:'1972',
                  duration:'175m',


  },
  {
    title: 'The Shawshank Redemption',
    poster: '/images/poster1.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      type:'Movie',
            releaseDate:'1994',
            duration:'142m',

  },
  {
    title: 'The Dark Knight',
    poster: '/images/poster2.jpg',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
       type:'movie',
             releaseDate:'2008',
                         duration:'152m',


  },
   {
    title: 'The Dark Knight',
    poster: '/images/poster2.jpg',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
       type:'movie',
             releaseDate:'2008',
                         duration:'152m',


  },
   {
    title: 'The Dark Knight',
    poster: '/images/poster2.jpg',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
       type:'movie',
             releaseDate:'2008',
                         duration:'152m',


  }, {
    title: 'The Dark Knight',
    poster: '/images/poster2.jpg',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
       type:'movie',
             releaseDate:'2008',
                         duration:'152m',


  },
  
 
];

function Movies() {
  return (

    <div>
 <Navigation 
        />
      <DarkMode/>
      <div style={{textAlign:"center",fontWeight:"bolder"}}><h1 style={{fontWeight:"bolder"}}>Our selection of Movies:</h1></div>
       <div className="stream-grid">
      {streamData.map((stream) => (
        <StreamCard key={stream.title} stream={stream} />
      ))}
    </div>    
      <Footer/>

    </div>
  )}
  export default Movies;