import React from 'react';
import Skills from './Skills'

function About () {
  return (
    <div className='section about'>
      <a id="aboutlinked"></a>
      <div className='about_content'>
        <h1>Hmm a bit about me</h1>
        <p>I am very fortunate to have grown up in the heart of Silicon Valley.</p>
        <p>I am a full-stack engineer with focus on front-end development.</p>
        <p>I was attracted to software engineering after discovering the fact that everyone in this field has the mentality where  
           the sky's the limit.</p>
        <p><strong>BUT!</strong> I fell in love with it after the very first time I saw the code I wrote came to life on screen.</p>
        <p>I am either working on a project, leetcoding or working on my personal growth and mental health through reading, meal prepping, listening to podcasts and traveling.</p>
        <p>Making bold moves and solving hard problems are what drive me every day.</p> 
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
