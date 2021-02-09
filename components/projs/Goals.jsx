import React from 'react';

function DailyGoals () {
  return (
    <div id="proj6" className='project_container card'>
      <div className="project_content card_content">
        <div className="project_media front">
          <img src="../public/goals.png" alt=""/>
        </div>
        <div className="project_description back">
          <h1 className="card_title">Daily Goals Mobile:</h1>
          <p className="card_descr"> A React-Native and React-Hooks based mobile application that allows users to keep track of progress on their goals and provides continued motivational quotes upon every task completion.
          </p>
          <p className="stack"><span>TECH STACK: </span>  React-Native | Android Studio | CSS | HTML </p>
          <div className="projLink">
          <a href="https://www.youtube.com/watch?v=JX9K_1OhfHE"
            target="_blank">Youtube</a> | <a href="https://github.com/dongb909/GoalsTracker"
            target="_blank">Github</a></div>
        </div>
      </div>  
    </div>
  )
}
export default DailyGoals;