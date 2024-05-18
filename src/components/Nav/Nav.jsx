// import React from "react";

// import "./Nav.css";

// function Nav() {
//   return (
//     <div>
//       <div className="navbar">
// <div className="nav2"></div>
//       <input type="checkbox" id="check" />
//           <label htmlFor="check" className="label">
//             <img src="hamb.png" alt="jhfgd" className="hamburger" />
//           </label>
//           <div className="fullnav">
//             <div className="p1-nav">Home</div>
//             <div  className="p1-nav">Project</div>
//             <div  className="p1-nav">Skills</div>
//             <div  className="p1-nav">Contact</div>

//           </div></div>

// <div className="navbar2">

//   <div className="navbar21"></div>
//   <div className="navbar22">
//    <a href="https://www.instagram.com/jishnu_c_k_/"><img src="/instagram.png" className="insta"></img></a>

//    <a href="https://www.linkedin.com/in/jishnu-ck/"> <img src="/linkedin.png" className="insta"></img></a>
//    <a href="https://github.com/Jishnuck2000"> <img src="/github (1).png" className="insta"/></a>
//    <a href="https://www.facebook.com/jishnu.jishnu.14224094"><img src="/facebook.png" className="insta"/></a>

//   </div>
//   <div className="navbar23"></div>

// </div>

//     </div>
//   );
// }

// export default Nav;

import React, { forwardRef, useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  // for Dynamic Island
  const [islandOn, setIslandOn] = useState(false);

  const islandOnHandler = () => {
    setIslandOn(true);
  };

  //Dynamic Island Off

  const islandOffHandler = () => {
    setTimeout(() => {
      setIslandOn(false);
    }, 200);
  };

  //Dark Mode Handler

  return (
    <div>
      <div
        className={"navbar-main"}
        // className="navbar-main"
      >
        <div className="navbar-menu-sec">
          <ul className="navbar-menu-items">
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="home-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Home
            </Link>
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="project-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Project
            </Link>
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="skill-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Skills
            </Link>{" "}
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="contact-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Contact
            </Link>{" "}
          </ul>
          {/* <div className="darkmode" onClick={() => dispatch(darkModeHandler())}> */}
          {/* <div className="darkmode" onClick={() => dispatch(DarkmodeHandler())}>
            
            <img
              src={
                darkModeHandlerfunction == true
                  ? "./darkmode.png"
                  : "./lightmode.png "
              }
              className="darkmode-icon"
            />
          </div>{" "} */}
        </div>

        {/* //Dynamic island area */}

        <div
          className={
            islandOn == false
              ? "navbar-islandoff-menu-sec"
              : "navbar-island-menu-sec"
          }
          onClick={islandOnHandler}
        >
          {islandOn == true ? (
            <>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="home-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/home.png" alt="" className="dynamic-logo" />
                  Home
                </Link>
              </div>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="project-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/projects.png" alt="" className="dynamic-logo" />
                  Projects
                </Link>
              </div>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="skill-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/skills.png" alt="" className="dynamic-logo" />
                  Skills
                </Link>
              </div>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="contact-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/contact.png" alt="" className="dynamic-logo" />
                  Contacts
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="initial-island"></div>
              <div className="initial-island"></div>
              <div className="initial-island"></div>
              <div className="initial-island"></div>
              <div className="initial-island"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
