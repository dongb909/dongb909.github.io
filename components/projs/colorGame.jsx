import React from 'react';

function ColorGame () {
  return (
    <div id="proj5" className='project_container card'>
      <div className="project_content card_content">
        <div className="project_media front">
          <img src="../public/colorGame2.png" alt=""/>
        </div>
        <div className="project_description back">
        <h1 className="card_title">RGB Color Game:</h1>
          <p className="card_descr"> An interactive game where player can choose between 2 levels and has to guess what color correlates to the RGB color combination that's shown on the top of the screen. Player can choose to give up and get new colors, or choose to play again after they've achieved a win.
          </p>
          <p className="stack"><span>TECH STACK: </span>  Vanilla JS | CSS | HTML </p>
          <div className="projLink">
          <a href="https://color-guessing-game.vercel.app/"
            target="_blank">LIVE</a> | <a href="https://github.com/dongb909/ColorGuessingGame"
            target="_blank">Github</a></div>
        </div>
      </div>  
    </div>
  )
}
export default ColorGame;