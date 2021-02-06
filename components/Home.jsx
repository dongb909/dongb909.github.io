import React from 'react';
import Typed from 'react-typed';

function Home () { 
  return ( 
    <div className="section home">
      <a id="homelinked"></a>
      <div className="welcome">
        <div className="home_content">
          <br/>
          <br/>
          <h2>Hi! My name is </h2>
          <h1 id="homeTitle"><Typed strings={["Rachel Dong"]} typeSpeed={100} startDelay={80}/></h1>
          <h2 id="homeSubtitle"><Typed strings={["Welcome to my page", "I'm a Software Engineer", "Web Developer", "Avid Reader", "AND!!!","Lifelong Learner"]} typeSpeed={60} backSpeed={20} startDelay={200} loop/></h2>
          <br/>
          <br/>
          <a href="#aboutbuttonlinked"><button>ABOUT ME</button></a>
        </div>          
      </div>
    </div>
  );
}



export default Home;