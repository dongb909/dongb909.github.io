import React from 'react';
import '../public/main.scss'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';


 function App () {
    return ( 
      <div>
        <Navbar />
        <div className="mainContainer">
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
      </div>
     );
}
 
export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {visibile: false}
//     this.navbarHandler = this.navbarHandler.bind(this);
//   }

//   navbarHandler(event){
//     event.preventDefault();
//     console.log(e.target.className);
//     this.setState(state => ({visible: !state.visible}));
//     // e.target.className.toggle("open");

//   }
