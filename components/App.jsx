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
      <div>
        <Navbar />
        <div className="mainContainer">
          {/* <Home/>
          <About/>
          <Skills/>
          <Projects/> */}
          <a id="aboutbuttonlinked"></a>
          <Contact/>
        </div>
      </div>
     );
}
 
export default App;

