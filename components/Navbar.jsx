import React, {useEffect} from 'react';

const Navbar = () => {
  useEffect(function(){
    const bar = document.querySelector(".navbar")
    const home = document.querySelector(".home");
    // console.log(home, bar)
    const navOptions = {
      // threshold:0,
      rootMargin: "-100px 0px 0px 0px"
    }
    const navColorOnScroll = new IntersectionObserver(function(entries, navColorOnScroll){
      entries.forEach(entry=>{
        if(!entry.isIntersecting) bar.classList.add("navBgColor")
        else bar.classList.remove("navBgColor")
      })
    }, navOptions);
  
      navColorOnScroll.observe(home);
  })
  return (  
    <header>
    <nav className="navbar" >
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="navlinks">
        <li className="anchor"><a href="#homelinked">HOME</a></li>
        <li className="anchor2"><a href="#aboutlinked">ABOUT</a></li>
        <li className="anchor3"><a href="#projectslinked">PROJECTS</a></li>
        <li className="anchor4"><a href="#contactlinked">CONTACT</a></li>
      </ul>
    </nav>  
    </header>
  );
}
 
export default Navbar;