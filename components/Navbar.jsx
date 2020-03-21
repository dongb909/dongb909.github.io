import React from 'react';

// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       navbarDisplay: "none"
//       }
//   }
//   render() { 
//     return ( 
//       <nav className="navbar" >
//         <div className="burger" >
//           <div className="line"></div>
//           <div className="line"></div>
//           <div className="line"></div>
//         </div>
//         <ul className="navlinks">
//           <li><a href="#home">HOME</a></li>
//           <li><a href="#about">ABOUT</a></li>
//           <li><a href="#projects">PROJECTS</a></li>
//           <li><a href="#contact">CONTACT</a></li>
//         </ul>
//       </nav>  
//      );
//   }
// }
 
// export default Navbar;


const Navbar = () => {
  // const toggleNavbar = (e) => e.target.className.toggle("open")

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
        <li><a href="#projectlinked">PROJECTS</a></li>
        <li><a href="#contactlinked">CONTACT</a></li>
      </ul>
    </nav>  
  );
}
 
export default Navbar;