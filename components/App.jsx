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
        <section className='about'>
          <h3>ABOUT ME</h3>
        </section>
        <section className='projects'>
          <h3>PROJECTS</h3>
        </section>
        <section className='contact'>
          <h3>CONTACT PAGE</h3>
        </section>
      </div>
    </div>
  )
}

export default App;