

import React, { useState } from "react";
import SearchBar from "./searchBar";
import "../../src/styles/home.css";
import { NavLink } from "react-router-dom";


const Navigation = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    
    <div className="Navigation" 
    >
      <nav className="navbar navbar-expand-lg ">
              <div className="container">
                 <NavLink className="nav-link" to="/"><img 
            style={{
              marginRight:"auto",
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
              width: "80px",
            }}
            src="/images/logo.png"
            alt=""
          />
                </NavLink>

       <button
  className="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded={!isNavCollapsed ? true : false}
  aria-label="Toggle navigation"
  onClick={handleNavCollapse}
  style={{
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    height:"30px",
    lineHeight:"30px",
  }}
>
  <span
    className="navbar-toggler-icon"
    style={{
      display: "block",
      width: "1.2em",
      height: "2.5px",
      margin: "0.15em auto",
      background: "black"
    }}
  ></span>
  <span
    className="navbar-toggler-icon"
    style={{
      display: "block",
      width: "1.2em",
      height: "2.5px",
      margin: "0.15em auto",
      background: "black"
    }}
  ></span>
  <span
    className="navbar-toggler-icon"
    style={{
      display: "block",
      width: "1.2em",
      height: "2.5px",
      margin: "0.15em auto",
      background: "black"
    }}
  ></span>
</button>

<div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
  <ul className="navbar-nav ml-auto">
        
        <li className="nav-item"> <NavLink className="nav-link" to="/NotFound">
                  TV shows
                </NavLink></li>
        
        <li className="nav-item" > <NavLink className="nav-link" to="/NotFound">
               Movies </NavLink></li>
       
        <li className="nav-item">
          <SearchBar />
        </li>
       
      </ul></div>
    </div>
    </nav>
    </div>
  );
};

export default Navigation;

