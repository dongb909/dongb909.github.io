import React from 'react';

function DataFi () {
  return (
    <div className='project_container'>
      <div className="project_content">
        <div className="project_media">
          <img 
            src="https://srpics.s3-us-west-1.amazonaws.com/FINISHED+SDC+LOADER+IO+.jpg" 
            alt="DataFi performance metrics" 
            width="230" 
            height="160"></img>
        </div>
        <div className="project_description">
          <a src="http://github.com/Data-fi/Gallery"><h1>DATAFI</h1></a>
          <p>I redesigned the backend for a gallery microservice to be able to take 
            on production level load by identifying bottlenecks for speed optimization
             and scaling. Goal: throughput {">"} 1000rps, latency {"<"} 2000ms.
          </p>
        </div>
      </div>  
    </div>
  )
}
export default DataFi;