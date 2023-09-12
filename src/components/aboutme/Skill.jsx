import React, { useState } from 'react';
import skills from './data.js';
import './skill.scss';

const Skill = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === "arrow-left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : skills.length - 1)
            : setCurrentSlide(currentSlide < skills.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="skills-container">
            <span onClick={() => handleClick("arrow-left")}>
                <i className="fa-solid fa-forward-step arrow-left" style={{"transform": "rotate(180deg)"}}></i>
            </span>
            {skills.map((skill, index) => (
                <div className={`card ${currentSlide === index ? "active" : ""}`} key={index}>
                    <h6 style={{ "font-size": "2rem", "color": "#ffc01c" }}>{skill.title}</h6>
                    {skill.tech.map((item, techIndex) => (
                        <div key={techIndex}>
                            <img src={item.img} className="skill-img" alt="" />
                            <h6 className="skill-name">{item.name}</h6>
                        </div>
                    ))}
                </div>
            ))}
            <span onClick={() => handleClick()}>
                <i className="fa-solid fa-forward-step arrow-right"></i>
            </span>
        </div>
    );
};

export default Skill;
