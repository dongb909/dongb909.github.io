import React from 'react';

function About () {
  return (
    <section id='about' className="clearfix">
      <a id="aboutlinked"></a>
      <div id="myPhoto"> <img src="../public/cafe.jpg" alt="My profile picture"/></div>
      {/* <div id='about_content'> */}
        <div id="aboutDescr" className="one">
          <h1>About <span>Me</span></h1>
          <p>Welcome to my page! My name is Rachel and I am a Pharmacist turned Software Developer. Although I loved achieving the goal of being able to empower patients to live healthier lives, after 4 years of working alongside interdisciplinary teams of providers to care for diverse patient populations, I felt that the tools and systems we were using were just not efficient enough nor far-reaching enough to make the impact I wanted to achieve.</p>
          <p>I fell in love with software engineering for how forward-thinking and open to change this field is. I was instantly hooked after building my first beautiful and fully scaled microservice and have been excited to be a part of the movement towards innovation and efficient products ever since! No surprise because making bold moves and solving hard problems are what drive me every day.</p> 
          <p>When I'm not coding away, I am either working on my personal growth and mental health through reading, meal prepping, listening to podcasts or traveling.</p>
        </div>

      {/* </div> */}
    </section>
  )
}

export default About;
