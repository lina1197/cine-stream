import React, { useState } from 'react';
import Slider from 'react-slick';
import "../../src/styles/home.css";
import { Link } from 'react-router-dom';

export default function SliderSyncing() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        <div>
          <div  style={{position:"absolute", color:"white",fontWeight:"bolder"}}>
            <div className="title" ><h1 style={{fontWeight:"bolder"}} > John Wick  <br /> chapter 4</h1></div>
            <div style={{display:"flex"}}><div class="rating">
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
</div>
<div>
  <span class="genre">Action</span>
  <span class="separator">|</span>
  <span class="genre">Crime</span>
  <span class="separator">|</span>
  <span class="genre">Thriller</span>
</div>
</div>
            
<p style={{width:"20%"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim unde pariatur in aut, tempora cumque laboriosam quam nobis corrupti ratione sed quia, iusto rerum temporibus repellendus ea facere minima?</p>

            
            <Link style={{textDecoration: "none",padding:"1px 10px",fontWeight:"bold",
background:"red", color:"white",borderRadius:"10px"}} to="/Play" >Play Now</Link>
            <Link style={{textDecoration: "none",fontWeight:"bold",padding:"1px 10px",
background:"white", color:"red",borderRadius:"10px"}} to="/*">More Information</Link>
 <h1 style={{fontWeight:"bolder"}}>Popular Today:</h1>
          </div>
                         

          <img style={{width:"100%",height:"600px", overflow:"hidden"}} src="/images/sliderIMG1.png" alt="" />
        </div>
        <div>
        <div>
          <div   style={{position:"absolute", color:"white",fontWeight:"bolder"}}>
            <div className="title" ><h1 style={{fontWeight:"bolder"}}> Avatar:  <br /> The Way of Water</h1></div>
            <div style={{display:"flex"}}><div class="rating">
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
</div>
<div>
  <span class="genre">Science fiction</span>
  <span class="separator">|</span>
  <span class="genre">Action</span>
  <span class="separator">|</span>
  <span class="genre">Adventure</span>
</div>
</div>
            
<p style={{width:"20%"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim unde pariatur in aut, tempora cumque laboriosam quam nobis corrupti ratione sed quia, iusto rerum temporibus repellendus ea facere minima?</p>

            
            <Link style={{textDecoration: "none",padding:"1px 10px",fontWeight:"bold",
background:"red", color:"white",borderRadius:"10px"}} to="/Play" >Play Now</Link>
            <Link style={{textDecoration: "none",fontWeight:"bold",padding:"1px 10px",
background:"white", color:"red",borderRadius:"10px"}} to="/*">More Information</Link>
 <h1 style={{fontWeight:"bolder"}}>Popular Today:</h1>
          </div>
          <img style={{width:"100%",height:"600px", overflow:"hidden"}} src="/images/sliderIMG2.jpg" alt="" /></div> 
        </div>
        <div>
          <div>
            <div  style={{position:"absolute", color:"white",fontWeight:"bolder"}}>
            <div className="title" ><h1 style={{fontWeight:"bolder"}}> Dungeons and Dragons:  <br /> Honor Amongst Thieves</h1></div>
            <div style={{display:"flex"}}><div class="rating">
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
</div>
<div>
  <span class="genre">Action</span>
  <span class="separator">|</span>
  <span class="genre">Adventure</span>
  <span class="separator">|</span>
  <span class="genre">Fantasy</span>
</div>
</div>
            
<p style={{width:"20%"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim unde pariatur in aut, tempora cumque laboriosam quam nobis corrupti ratione sed quia, iusto rerum temporibus repellendus ea facere minima?</p>

            
            <Link style={{textDecoration: "none",padding:"1px 10px",fontWeight:"bold",
background:"red", color:"white",borderRadius:"10px"}} to="/Play" >Play Now</Link>
            <Link style={{textDecoration: "none",fontWeight:"bold",padding:"1px 10px",
background:"white", color:"red",borderRadius:"10px"}} to="/*">More Information</Link>
 <h1 style={{fontWeight:"bolder"}}>Popular Today:</h1>
          </div>
            <img style={{width:"100%",height:"600px", overflow:"hidden"}} src="/images/sliderIMG3.png" alt="" /></div> 
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>

        </div>
      </Slider>  
       <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
         centerMode={true}
           centerPadding="60px"

           className="slider2"

       
      >
      
        <div>
          <img style={{width:"40%",height:"100px"}} src="/images/sliderIMG1.png" alt="" />
        </div>
        <div>
          <img  style={{width:"40%",height:"100px"}} src="/images/sliderIMG2.jpg" alt="" />
        </div>
        <div>
          <img style={{width:"40%",height:"100px"}} src="/images/sliderIMG3.png" alt="" />
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider></div>
     
  );
}

