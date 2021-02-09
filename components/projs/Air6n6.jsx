import React from 'react';

function Air6n6 () {
  return (
    <div id="proj4" className='project_container card'>
      <div className="project_content card_content">
        <div className="project_media medi front">
          <img
            src="../public/air6n6.png">
          </img>
        </div>
        <div className="project_description back">
        <h1 className="card_title">Lodgings Air6n6</h1>
          <p className="card_descr"> An interactive rental listing carousel microservice that allows users to favorite a particular listing after signing in with a modal popup and that's optimized for load speed. 
          </p>
          <p className="stack"><span>TECH STACK: </span>  MySQL | AWS S3 | React | Express | JS | Google Lighthouse | CSS | HTML</p>
          <div className="projLink">
          <a href="https://github.com/dongb909/Recommendation"
            target="_blank">Github</a> | <a href="https://www.youtube.com/watch?v=VhR5Ccf0Bms"
            target="_blank">Youtube</a></div>
        </div>
      </div>  
    </div>
  )
}
export default Air6n6;