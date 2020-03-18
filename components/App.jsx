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
        <Home/>
        <div className='section about'>
          <h3>ABOUT ME</h3>
        </div>
        <div className='section projects'>
          <h3>PROJECTS</h3>
        </div>
        <div className='section contact'>
          <h3>CONTACT PAGE</h3>
        </div>
      </div>
    </div>
  )
}

export default App;