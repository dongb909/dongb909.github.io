import React from 'react';

function GroceriVibes () {
  return (
    <div id="proj4" className='project_container '>
      <div className="project_content">
        <div className="project_media front">
          <iframe src="https://www.youtube.com/embed/eCo43ZDs6Z4?autoplay=1"></iframe>
        </div>
        <div className="project_description back">
          <a href="https://github.com/dongb909/GroceriVibes" ><h1>GROCERIVIBES</h1></a>
          <p> A single page ecommerce application where shoppers can buy groceries.
          </p>
          <p>Tech stack: Postgres | Express | React | Node.js</p>
        </div>
      </div>  
    </div>
  )
}
export default GroceriVibes;