import React from 'react';

function DataFi () {
  return (
    <div id="proj2" className='project_container card'>
      <div className="project_content card_content">
        <div className="project_media front">
          {/* <a href="https://srpics.s3-us-west-1.amazonaws.com/FINISHED+SDC+LOADER+IO+.jpg"
            target="_blank" 
            rel="noopener noreferrer"> */}
              <img src="https://srpics.s3-us-west-1.amazonaws.com/FINISHED+SDC+LOADER+IO+.jpg" 
                alt="DataFi performance metrics">
              </img>
          {/* </a> */}
        </div>
        <div className="project_description back">
        <h1 className="card_title">DataFi</h1>
          <p className="card_descr"> A full-stack gallery microservice that's highly scalable and performance optimized for a database containing 70M seed records. Tested for system bottlenecks.
          </p>
          <p className="stack"><span>TECH STACK: </span> AWS | NGINX | CloudWatch | New Relic | MongoDB | React | JS</p>
          <div className="projLink">
          <a href="https://github.com/Data-fi/Gallery"
            target="_blank">Github</a></div>
        </div>
      </div>  
    </div>
  )
}
export default DataFi;