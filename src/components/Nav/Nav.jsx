import React from "react";

import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="navbar">
<div className="nav2"></div>
      <input type="checkbox" id="check" />
          <label htmlFor="check" className="label">
            <img src="hamb.png" alt="jhfgd" className="hamburger" />
          </label>
          <div className="fullnav">
            <div className="p1-nav">Home</div>
            <div  className="p1-nav">Project</div>
            <div  className="p1-nav">Skills</div>
            <div  className="p1-nav">Contact</div>

          </div></div>


<div className="navbar2">

  <div className="navbar21"></div>
  <div className="navbar22">
   <a href="https://www.instagram.com/jishnu_c_k_/"><img src="/instagram.png" className="insta"></img></a>
   
   <a href="https://www.linkedin.com/in/jishnu-ck/"> <img src="/linkedin.png" className="insta"></img></a>
   <a href="https://github.com/Jishnuck2000"> <img src="/github (1).png" className="insta"/></a>
   <a href="https://www.facebook.com/jishnu.jishnu.14224094"><img src="/facebook.png" className="insta"/></a>

  </div>
  <div className="navbar23"></div>

</div>



    </div>
  );
}

export default Nav;
