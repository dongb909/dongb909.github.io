import React from 'react';
import Skills from './Skills'

function About () {
  return (
    <div className='section about'>
      <div className='about_content'>
        <h1>Let me take you through a breif journey</h1>
        <br/>
        <p>I am very fortunate to have grown up in the heart of Silicon Valley and see first hand how fast technology has been growing and changing how we do things. I was drawn to software engineering for the fact that this field constantly pushes you to go beyond what you’ve done before with new technologies always being pushed out as well as the collaborative culture when working with like-minded individuals in solving complex problems. The addicting feeling of achievement from persevering through tough challenges and making bold moves is what drives me every day.</p>
        <br/>
        <p>Additionally, I have >5 years' worth of experience working with various interdisciplinary teams of healthcare professionals and patient populations. Therefore, self-awareness, empathy and interpersonal skills are some of my strongest points.</p>
        <br/>
        <p>I've accumulated >900 hours of coding so far and counting. When I’m not tackling a coding challenge or working on a project, I focus on other things that contribute to my personal growth and mental health such as reading, meal prepping, listening to podcasts and traveling.</p>
      </div>
      <Skills/>
    </div>
  )
}

export default About;