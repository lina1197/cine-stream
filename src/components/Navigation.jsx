

import React from "react";
import SearchBar from "./searchBar";
import "../../src/styles/home.css";

const Navigation = () => {


  return (
    <div className="Navigation" 
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          listStyle: "none",
          margin:"0px",
        
          fontWeight: "bold",
        }}
      >
        <li style={{ marginRight: "auto" }}>
          <img
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
              width: "80px",
            }}
            src="/images/logo.png"
            alt=""
          />
        </li>
        <li style={{ marginRight: "10px" }}>TV shows</li>
        <li style={{ marginRight: "10px" }}>Movies</li>
        <li style={{ marginRight: "auto" }}>
          <SearchBar />
        </li>
       
      </ul>
    </div>
  );
};

export default Navigation;

