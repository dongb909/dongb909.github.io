import React from 'react';
import Air6n6 from './projs/Air6n6';
import DataFi from './projs/DataFi';
import GroceriVibes from './projs/GroceriVibes';
import GoalTracker from './projs/GoalTracker';

function Projects () {
  return (
    <div className='section projects'>
      <a id="projectslinked"></a>
      <h1>PROJECTS</h1>
      <p><strong>.....................</strong></p>
      <div className="projects_main_container">
        <Air6n6 />
        <DataFi/>
        <GroceriVibes/>
        <GoalTracker/>
      </div>
    </div>
  )
}
export default Projects;