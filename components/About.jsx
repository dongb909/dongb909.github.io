import React, {useEffect} from 'react';

function About () {
  useEffect(function(){
    const sliders = document.querySelectorAll(".slide_in");
    const appearOptions = {
    threshold:0,
    rootMargin: "0px 0px -150px 0px"
  }
  const appearOnScroll = new IntersectionObserver(function(entries, appearonScroll){
    entries.forEach(entry=>{
      if(!entry.isIntersecting){return}
      else{
        entry.target.classList.add("appear")
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

  sliders.forEach(slider =>{
    appearOnScroll.observe(slider)
  })
  })

  return (
    <section id='about' className="clearfix">
      <a id="aboutlinked"></a>
      <div id="myPhoto"> <img src="../public/cafe.jpg" alt="My profile picture"/></div>
        <div id="aboutDescr" className="one">
          <h1 className="slide_in from_right">About <span>Me</span></h1>
          <p className="slide_in from_left">Welcome to my page! My name is Rachel and I am a Pharmacist turned Software Developer. After working alongside interdisciplinary teams of healthcare providers to care for diverse groups of patient populations for over 4 years, I felt that the tools and systems being used were inefficient and not far-reaching enough. Although I loved being able to empower patients to live healthier lives, I knew I could make a bigger impact by creating tools, solutions, and better interfaces to be used by everyone.</p>
          <p  className="slide_in from_left">I fell in love with software engineering for how forward-thinking and open to change this field is. I was instantly hooked after building my first beautiful and fully scaled microservice. I am excited to be a part of the movement towards innovation and efficient products because making bold moves and solving hard problems is what drives me every day.</p> 
          <p  className="slide_in from_left">When I'm not coding away, I am either working on my personal growth and mental health through reading, meal prepping, listening to podcasts or traveling.</p>
        </div>
    </section>
  )
}

export default About;
