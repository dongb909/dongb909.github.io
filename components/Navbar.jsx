import React from 'react';

const Navbar = () => {
 
  return (  
    <nav className="navbar" >
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="navlinks">
        <li className="anchor"><a href="#homelinked">HOME</a></li>
        <li className="anchor2"><a href="#aboutlinked">ABOUT</a></li>
        <li className="anchor3"><a href="#projectslinked">PROJECTS</a></li>
        <li className="anchor4"><a href="#contactlinked">CONTACT</a></li>
      </ul>
    </nav>  
  );
}
 
export default Navbar;