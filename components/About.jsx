import React from 'react';
import Skills from './Skills'

function About () {
  return (
    <div className='section about'>
      <a id="aboutlinked"></a>
      <div className='about_content'>
        <h1>Hmm a bit about me</h1>
        <p><strong>I ... </strong></p>
        <p>Am very fortunate to have grown up in the heart of Silicon Valley.</p>
        <p>Am a full-stack engineer with focus on front-end development.</p>
        <p>Was attract to software engineering after discovering the fact that everyone in this field has the mentality where 
          <strong>the sky's the limit. BUT!</strong></p>
        <p>Fell in love with it after the very first time I saw the code I wrote come to life on screen.</p>
        <p>Am either working on a project, leetcoding or working on my personal growth and mental health through reading, meal prepping, listening to podcasts and traveling.</p>
        <p>Make bold moves and solve hard problems. They are what drives me every day.</p> 
        <p>Self-awareness, empathy, and interpersonalskills are some of my strongest points. </p>
        {/* <p>Additionally, with over 5 years' worth of experience working with various interdisciplinary teams of healthcare professionals and patient populations. 
          Therefore, self-awareness, empathy and interpersonal skills are some of my strongest points. Not to mention that my name means "humanitarianism"!</p> */}
        <p>Below are some of the technologies I work with:</p>
      </div>
      <Skills/>
    </div>
  )
}

export default About;

/*My research was my first exposure to programming and I loved it so much, I switched careers.

My concentration is in front end development with technologies that I love: React and Redux.

My occupation is also my hobby. I spend my free time coding up personal projects. I also frequent Stack
 Overflow and helping fellow programmers with their JavaScript and React code. Check out my profile here. 
 If you like my answers, feel free to upvote them. I love internet points. */