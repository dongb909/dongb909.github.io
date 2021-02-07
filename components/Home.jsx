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
          <h1 id="description"><Typed strings={["I'm a Software Engineer", "who loves building applications for the web"]} typeSpeed={60} backSpeed={10} startDelay={200} loop/></h1>
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