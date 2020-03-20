import React from 'react';
import '../main.scss'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';

function App () {
  return (
    <div>
      <Navbar/>
      <div className="mainContainer">
        <Contact/>
        <Home/>
        <About/>
        <Projects/>
      </div>
    </div>
  )
}

export default App;