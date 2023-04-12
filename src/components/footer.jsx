import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <div className="footer" >
        <div className="logoSocialMedia"><img
           
            src="/images/logo.png"
            alt=""
          />
          <div >
<i class="fab fa-facebook-f fa-lg white-icon"></i>
            <i class="fab fa-twitter fa-lg white-icon"></i>
<i class="fab fa-instagram fa-lg white-icon"></i>
<i class="fab fa-youtube fa-lg white-icon"></i>

          </div></div>
        
        <div className="row1">
        <ul className="footerList" ><li ><Link>Contact </Link></li>
        <li ><Link> Privacy Policy</Link></li>
        <li ><Link> Terms of use</Link></li><li ><Link> Sitemap</Link></li>
        <li ><Link>Help</Link></li>
        <li ><Link>About</Link></li></ul></div>
        
        
        <div><p style={{textAlign:"center"}}>Copyright © 2020.CineStream.All rights reserved.</p></div>
        
    </div>
  )};
  export default Footer;