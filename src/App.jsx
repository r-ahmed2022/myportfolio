import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Intro } from './components/intro/Intro'; 
import  Aboutme  from './components/aboutme/Aboutme';
import { Portfolio } from './components/portfolio/Portfolio';
import { Recommendation } from './components/recommendations/Recommendation';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import HamburgerMenu from './components/hamburgermenu/HamburgerMenu';
import { gitHubInfo } from './components/aboutme/redux/githubSlice';
import { starCountInfo } from './components/aboutme/redux/starCountSlice';

import './app.scss';
const  App = () => {
  const [menuState, setMenuState] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gitHubInfo());
    dispatch(starCountInfo());
    return () => {
      console.log('Component unmounted');
    };
  }, [dispatch]);

  return (
    <div className="app">
        <Navbar menuState={menuState} setMenuState={setMenuState} />
        <HamburgerMenu menuState={menuState} setMenuState={setMenuState} />
      <div className="main-content">
        <Intro menuState={menuState} setMenuState={setMenuState} />
        <Portfolio menuState={menuState} setMenuState={setMenuState} />
        <Aboutme menuState={menuState} setMenuState={setMenuState} />
        <Recommendation menuState={menuState} setMenuState={setMenuState} />
        <Contact menuState={menuState} setMenuState={setMenuState} />
      </div>
    </div>
  );
}

export default App;
