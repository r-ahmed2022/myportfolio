/* eslint-disable global-require */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */
import React, { useRef, useEffect } from 'react';
import { init } from 'ityped';

import './Intro.scss';

export const Intro = ({ setMenuState }) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
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

  const openResumePDF = () => {
    const pdfURL = `${process.env.PUBLIC_URL}/Riyaz_Ahmed_Resume.pdf`;
    window.open(pdfURL, '_blank');
  };

  return (
    <div className="intro" id="intro">

      <div className="left-section" onClick={(e) => closeDialog(e)}>
        <h3>
          Full Stack
          <span ref={textRef} className="animatetext" />
          &#128075;
        </h3>
        <h1>Riyaz Ahmed</h1>

        <ul>
          <li><a href="https://github.com/r-ahmed2022/" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/images/github.png`} className="icons" alt="github" /></a></li>
          <li><a href="https://www.linkedin.com/in/riyazahmedmicroverse" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} className="icons" alt="linkedin" /></a></li>
          <li>
            <button
              type="button"
              className="resume"
              onClick={openResumePDF}
            >
              My Resume
            </button>
          </li>
        </ul>
        <footer><a href="#portfolio"><i className="fa-solid fa-angle-down downarrow" /></a></footer>

      </div>
      <div className="right-section">
        <div className="pic-section">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F1C21B" d="M43.2,-74.4C53.1,-69.1,56.3,-51.7,59,-37.3C61.6,-32.9,63.7,-11.5,66.4,1.6C69.2,14.6,72.5,29.2,69.7,43.3C66.9,57.4,57.8,70.9,45.2,77.5C32.5,84.1,16.3,83.7,1.6,81C-13.1,78.3,-26.3,73.3,-39.8,67.2C-53.3,61.1,-67.1,53.9,-77,42.5C-86.9,31.2,-92.9,15.6,-91.6,0.7C-90.3,-14.1,-81.8,-28.2,-72.9,-41.3C-64,-54.3,-54.6,-66.3,-42.3,-70.3C-30.1,-74.2,-15.1,-70.2,0.8,-71.6C16.6,-73,33.3,-79.7,43.2,-74.4Z" transform="translate(100 100)" />
          </svg>
          <img src="/images/mypic3.png" className="mypic" alt="mypicture" />
          <img
            src={`${process.env.PUBLIC_URL}/images/mypic3.png`}
            alt="pic"
          />

        </div>
      </div>

    </div>
  );
};
