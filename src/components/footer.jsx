import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {


  return (
    <div className="footer" >
        <div className="logoSocialMedia"><Link to='/'><img
           
            src="/images/logo.png"
            alt=""
          /></Link>
          <div >
<i class="fab fa-facebook-f fa-lg white-icon"></i>
            <i class="fab fa-twitter fa-lg white-icon"></i>
<i class="fab fa-instagram fa-lg white-icon"></i>
<i class="fab fa-youtube fa-lg white-icon"></i>

          </div></div>
        
        <div className="row1">
        <ul className="footerList" ><li ><Link to='/*'>Contact </Link></li>
        <li ><Link to='/*'> Privacy Policy</Link></li>
        <li ><Link to='/*'> Terms of use</Link></li><li ><Link to='/*'> Sitemap</Link></li>
        <li ><Link to='/*'>Help</Link></li>
        <li ><Link to='/*'>About</Link></li></ul></div>
        
        
        <div><p style={{textAlign:"center"}}>Copyright © 2020.CineStream.All rights reserved.</p></div>
        
    </div>
  )};
  export default Footer;