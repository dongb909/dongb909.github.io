import React from 'react';
import '../public/main.scss'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <div className="mainContainer">
          <Home />
          <About />
          <Projects/>
          <Contact />
        </div>
      </div>
     );
  }
}
 
export default App;

