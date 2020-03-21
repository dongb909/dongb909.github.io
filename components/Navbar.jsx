import React from 'react';

const Navbar = () => {

  return (  
    <nav className="navbar" >
      <div className="burger" onClick={() => navlinks.classList.toggle("open")} >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="navlinks">
        <li><a href="#homelinked">HOME</a></li>
        <li><a href="#aboutlinked">ABOUT</a></li>
        <li><a href="#projectslinked">PROJECTS</a></li>
        <li><a href="#contactlinked">CONTACT</a></li>
      </ul>
    </nav>  
  );
}
 
export default Navbar;