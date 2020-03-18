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
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>  
  );
}
 
export default Nav;