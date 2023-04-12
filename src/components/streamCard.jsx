import React, { useState } from 'react';
import "../../src/styles/home.css";

const StreamCard = ({ stream }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        <img  src={stream.poster} alt={stream.title} />
        <h5 style={{textAlign:"center",marginLeft:"5px"}}>{stream.title}</h5>
        <div style={{textAlign:"center",marginLeft:"5px"}} class="rating">
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
</div>
<div style={{fontSize:"0.8rem"}}>
      <span>{stream.releaseDate}</span>
        <span class="separator">|</span>

      <span>{stream.duration}</span>

    <span style={{border:"solid 1px ",marginLeft:"2px",padding:"1px"}}>{stream.type}</span>
</div>
    
      </div>
      <div className="back">
        <p>{stream.description}</p>
      </div>
    </div>
  );
};



export default StreamCard;
