import React from 'react';

const Nav = () => {
  return (  
    <nav className="navbar">
      <div className="burger">
        <div ></div>
        <div ></div>
        <div ></div>
      </div>
      <div>
        <ul className="navlinks">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </nav>  
  );
}
 
export default Nav;