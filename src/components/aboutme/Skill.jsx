/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import skills from './data.js';
import './skill.scss';

const Skill = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);

  const handleClick = (way) => {
    way === 'arrow-left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : skills.length - 1)
      : setCurrentSlide(currentSlide < skills.length - 1 ? currentSlide + 1 : 0);
  };
  useEffect(() => {
    const handleScroll = () => {
      const skillsContainer = document.querySelector('.skills-container');
      const skillsContainerTop = skillsContainer.getBoundingClientRect().top;
      const windowHeight = skillsContainer.innerHeight;

      if (skillsContainerTop < windowHeight) {
        setCardsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`skills-container ${cardsVisible ? 'cards-visible' : ''}`}>
      <span onClick={() => handleClick('arrow-left')}>
        <i className="fa-solid fa-forward-step arrow-left" style={{ transform: 'rotate(180deg)' }} />
      </span>
      {skills.map((skill, index) => (
        <div className={`card ${currentSlide === index ? 'active' : ''}`} key={index}>
          <h6 style={{ color: '#ffc01c' }}>{skill.title}</h6>
          {skill.tech.map((item, techIndex) => (
            <div key={techIndex}>
              <img src={`${process.env.PUBLIC_URL}/${item.img}`} className="skill-img" alt="" />
              <h6 className="skill-name">{item.name}</h6>
            </div>
          ))}
        </div>
      ))}
      <span onClick={() => handleClick()}>
        <i className="fa-solid fa-forward-step arrow-right" />
      </span>
    </div>
  );
};

export default Skill;
