import React, {useState, useRef, useEffect} from 'react'
import { init } from 'ityped'


import './Intro.scss'
export const Intro = ({ setMenuState }) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { showCursor: true,
      strings: ['Developer'], 
      typeSpeed: 400, 
      backSpeed: 700, 
      startDelay: 700, 
      backDelay: 1000, 
      loop: true, 
    });
  }, []);

  const closeDialog = (e) => {
    if (e.target === e.currentTarget) {
      setMenuState(false);
    }
  };

  return (
    <div className="intro" id="intro">
     
      <div  className="left-section" onClick={(e) => closeDialog(e)}>
         <h2>Hi there, I'm &#128075;</h2>
         <h1>Riyaz Ahmed</h1>
         <h3>Full Stack<span ref={textRef} className="animatetext"></span></h3>
         <ul>
            <li><a href="https://github.com/r-ahmed2022/"><i class="fa-brands fa-github fa-xs icons"></i></a></li>
            <li><a href="https://www.linkedin.com/in/riyazahmedmicroverse"><i class="fa-brands fa-linkedin fa-xs icons"></i></a></li>
          </ul>
          <footer><a href="#portfolio"><i class="fa-solid fa-angle-down downarrow"></i></a></footer>
      </div>
      <div  className="right-section">
        <div className="pic-section">
          <img src="images/mypic3.jpeg" className="mypic" alt="mypicture"/>
        </div>

      </div>

    </div>
  ) 
}
