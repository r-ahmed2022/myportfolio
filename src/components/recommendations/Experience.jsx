/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import './experience.scss';

const Experience = ({ recommendation }) => {
  const {
    name, image, place, profession, comment,
  } = recommendation;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const topPos = cardRef.current.getBoundingClientRect().top;
      setIsVisible(topPos < window.innerHeight - 70);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <li className={`experience ${isVisible ? 'visible' : ''}`} ref={cardRef}>
      <div className="experience-item">
        <h4>
          {name}
          <span style={{ color: 'red' }}>
            {`(${place})`}
          </span>
        </h4>
        <span>
          <img src={image} alt="pic" />
          <small style={{ margin: '0' }}>{comment}</small>
        </span>

      </div>
    </li>
  );
};

export default Experience;
