import React from 'react';
import Air6n6 from './projs/Air6n6';
import DataFi from './projs/DataFi';
import GroceriVibes from './projs/GroceriVibes';
import Portfolio from './projs/Portfolio';

function Projects () {
  return (
    <div className='section projects'>
      <a id="projectslinked"></a>
      <h1>PROJECTS</h1>
      {/* <p><strong>.....................</strong></p> */}
      <div className="projects_main_container">
        <Portfolio/>
        <Air6n6/>
        <DataFi/>
        <GroceriVibes/>
      </div>
    </div>
  )
}
export default Projects;