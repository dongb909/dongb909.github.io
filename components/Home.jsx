import React from 'react';
import Typed from 'react-typed';

function Home () { 
  return ( 
    <section className="section home">
      <a id="homelinked"></a>
      <div id="homeVideo">

      <video src="../public/code.mp4" muted loop autoPlay></video>
      </div>
      <div className="welcomeOverlay">
        <div className="home_content">
          <h1 id="greeting">Hi! My name is </h1>
          <h1 id="name">Rachel Dong.</h1>
          <h1 id="homeTitle"></h1>
          <h1 id="description"><Typed strings={["I'm a people-oriented, Software Engineer based in San Francisco Bay Area with an eye for design and a knack for problem-solving."]} typeSpeed={20} backSpeed={7} loop/></h1>
        </div>          
      </div>
      <div id="nextBtn">
        <a href="#aboutbuttonlinked">
          <div id="mouse">
            <span></span>
          </div>
          <div id="arrow">
            <span></span>
          </div>
        </a>
      </div>
    </section>
  );
}



export default Home;