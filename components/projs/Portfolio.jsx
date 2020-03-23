import React from 'react';

function Portfolio () {
  return (
    <div className='project_container'>
      <div className="project_content">
        <div className="project_media">
          <a href="https://srpics.s3-us-west-1.amazonaws.com/portfoliohompage.png"
            target="_blank" 
            rel="noopener noreferrer">
            <img src="https://srpics.s3-us-west-1.amazonaws.com/portfoliohompage.png">
            </img>
          </a>
        </div>
        <div className="project_description">
          <a href="https://github.com/dongb909/dongb909.github.io"><h1>PORTFOLIO</h1></a>
          <p>Congratulations! You already know about this frontend application! 
            There are many templates that I could have used but I wanted to take 
            the opportunity to practice with desktop vs mobile compatibility and CSS through the use of SASS.
          </p>
        </div>
      </div>  
    </div>
  )
}
export default Portfolio;