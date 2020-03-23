import React from 'react';

function DataFi () {
  return (
    <div className='project_container'>
      <div className="project_content">
        <div className="project_media">
          <a href="https://srpics.s3-us-west-1.amazonaws.com/FINISHED+SDC+LOADER+IO+.jpg"
            target="_blank" 
            rel="noopener noreferrer">
              <img src="https://srpics.s3-us-west-1.amazonaws.com/FINISHED+SDC+LOADER+IO+.jpg" 
                alt="DataFi performance metrics">
              </img>
          </a>
        </div>
        <div className="project_description">
          <a href="http://github.com/Data-fi/Gallery"><h1>DATAFI</h1></a>
          <p>Redesigned the backend for a gallery microservice to be able to take 
            on production level load by identifying bottlenecks for optimization
             and scaling. Tech stack: AWS | NGINX | New Relic | Loader.io | Node.js
          </p>
        </div>
      </div>  
    </div>
  )
}
export default DataFi;