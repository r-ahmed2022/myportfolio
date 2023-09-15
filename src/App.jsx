import React, {useState} from 'react';
import { Intro } from './components/intro/Intro'; 
import { Aboutme } from './components/aboutme/Aboutme';
import { Portfolio } from './components/portfolio/Portfolio';
import { Recommendation } from './components/recommendations/Recommendation';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import HamburgerMenu from './components/hamburgermenu/HamburgerMenu';
import './app.scss';
const  App = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="app">
        <Navbar menuState={menuState} setMenuState={setMenuState} />
        <HamburgerMenu menuState={menuState} setMenuState={setMenuState} />
      <div className="main-content">
        <Intro menuState={menuState} setMenuState={setMenuState} />
        <Portfolio />
        <Aboutme />
        <Recommendation />
        <Contact />
      </div>
    </div>
  );
}

export default App;
