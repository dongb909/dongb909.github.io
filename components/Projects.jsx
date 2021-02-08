import React from 'react';
import Air6n6 from './projs/Air6n6';
import DataFi from './projs/DataFi';
import ColorGame from './projs/colorGame';
import Portfolio from './projs/Portfolio';
import Goals from './projs/Goals';
import WonderLust from './projs/WonderLust';

function Projects () {
  return (
    <section className='projects'>
      <a id="projectslinked"></a>
      <h1>PROJECTS</h1>
      <div className="projects_main_container">
        <Portfolio/>
        <Air6n6/>
        <DataFi/>
        <ColorGame/>
        <Goals/>
        <WonderLust/>
      </div>
    </section>
  )
}
export default Projects;


