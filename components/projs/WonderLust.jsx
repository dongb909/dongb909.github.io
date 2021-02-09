import React from 'react';

function WonderLust () {
  return (
    <div id="proj3" className='project_container card'>
      <div className="project_content card-content">
        <div className="project_media front">
          <img src="../public/water.png" alt=""/>
        </div>
        <div className="project_description back">
        <h1 className="card_title">WonderLust:</h1>
          <p className="card_descr"> A multi-user Single Page Application that allows users to discover beautiful locations, share their experiences, and connect with other wonderers like themselves. Implements RESTful API routes to handle frontend CRUD operations. 
          </p>
          <p className="stack"><span>TECH STACK: </span>  REST | EJS | Bootstrap | MongoAtlas | AWS S3 | HTML | JS</p>
          <div className="projLink">
          <a href="https://theoutdoor.herokuapp.com/"
            target="_blank">LIVE</a> | <a href="https://github.com/dongb909/theOutdoors"
            target="_blank">Github</a></div>
        </div>
      </div>  
    </div>
  )
}
export default WonderLust;