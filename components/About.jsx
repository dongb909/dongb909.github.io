import React from 'react';
import Skills from './Skills'

function About () {
  return (
    <div className='section about'>
      <div className='about_content'>
        <h1>Let me take you through a breif journey</h1>
        <br/>
        <p>I am very fortunate to have grown up in the heart of Silicon Valley and see first hand how fast technology has been growing and changing how we do things. 
          I fell in love with software engineering after discovering the fact that this field constantly pushes you to go beyond what you’ve done before and the fact that everyone in this field has the mindset where <strong>the sky's the limit</strong>. 
          Being able to make bold moves and solve hard problems are what drives me every day so I made the jump from being a pharmacist to software engineering.</p>
        <br/>
        <p>When I’m not tackling a coding challenge or working on a project, I focus on other things that contribute to my personal growth and mental health such as reading, meal prepping, listening to podcasts and traveling.</p>
        {/* <p>Additionally, with over 5 years' worth of experience working with various interdisciplinary teams of healthcare professionals and patient populations. 
          Therefore, self-awareness, empathy and interpersonal skills are some of my strongest points. Not to mention that my name means "humanitarianism"!</p> */}
        <br/>
        <p><strong>Have a problem? Need to build a website?</strong></p>
        <p>Connect with me and I'll see what I can do for you! I'm a full-stack engineer with focus on front-end development</p>
        <p>Below are some of the things I work with:</p>
      </div>
      <Skills/>
    </div>
  )
}

export default About;