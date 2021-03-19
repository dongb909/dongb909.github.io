import React from 'react';
import '../public/main.scss'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import Skills from './Skills';


 function App () {
    return ( 
      <>
        <Navbar />
        <div className="mainContainer">
          <Home/>
          <a id="aboutbuttonlinked"></a>
          <About/> 
          <Skills/> 
          <Projects/> 
          <Contact/>
        </div>
      </>
     );
}
 
export default App;

