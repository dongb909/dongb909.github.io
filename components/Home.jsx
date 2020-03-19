import React from 'react';

function Home() {
  return (
    <div className="section home">
      <div className="welcome">
        <img src="https://srpics.s3-us-west-1.amazonaws.com/00.jpg" alt="Profile picture" ></img>
        <h1>Hi! I'm BacAi (Rachel),</h1>
        <p>a software engineer based in <strong>San Francisco Bay Area</strong></p>
        <p>Please take a look around!</p>
        <button className="arrow">Arrow Button</button>
      </div>
    </div>
  )
}

export default Home;