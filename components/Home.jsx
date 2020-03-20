import React from 'react';

function Home() {
  return (
    <div className="section home">
      <div className="welcome">
        <div className="home_content">
          <img src="https://srpics.s3-us-west-1.amazonaws.com/00.jpg" alt="Profile picture" ></img>
          <h1>Hi! I'm BacAi (Rachel),</h1>
          <p>a software engineer based in <strong>San Francisco Bay Area</strong></p>
          <button className="arrow">TAKE A LOOK AROUND!</button>

        </div>
        
      </div>
    </div>
  )
}

export default Home;