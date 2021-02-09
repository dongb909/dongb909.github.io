import React from 'react';

function Portfolio () {
  return (
    <div id="proj1" className='project_container card'>
      <div className="project_content card_content">
        <div className="project_media front">
            <img src="https://srpics.s3-us-west-1.amazonaws.com/portfoliohompage.png">
            </img>
        </div>
        <div className="project_description back">
          <h1 className="card_title">PORTFOLIO</h1>
          <p className="card_descr">Congratulations! You already know about this frontend application! 
            There are many templates that I could have used but I wanted to take 
            the opportunity to showcase my pure JS and CSS transition capabilities.
          </p>
          <p className="stack"><span>TECH STACK: </span> React | Hooks | SASS | JS | CSS</p>
          <div className="projLink">
            <a href="https://github.com/dongb909/dongb909.github.io">Github</a> | <a href="/">LIVE</a>
          </div>
        </div>
      </div>  
    </div>
  )
}
export default Portfolio;