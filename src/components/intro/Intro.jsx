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
