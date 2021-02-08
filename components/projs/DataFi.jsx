import React from 'react';

function DataFi () {
  return (
    <div id="proj2" className='project_container card'>
      <div className="project_content card_content">
        <div className="project_media front">
          <a href="https://srpics.s3-us-west-1.amazonaws.com/FINISHED+SDC+LOADER+IO+.jpg"
            target="_blank" 
            rel="noopener noreferrer">
              <img src="https://srpics.s3-us-west-1.amazonaws.com/FINISHED+SDC+LOADER+IO+.jpg" 
                alt="DataFi performance metrics">
              </img>
          </a>
        </div>
        <div className="project_description back">
        <h1 className="card_title">Daily Goals</h1>
          <p className="card_descr"> FILL IN
          </p>
          <p className="stack">Tech stack: React Native | Android Studio |CSS | JS</p>
          <div className="projLink"></div>
          <div className="projLive"></div>
        </div>
      </div>  
    </div>
  )
}
export default DataFi;