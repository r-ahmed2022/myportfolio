/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './aboutme.scss';
import Skill from './Skill';
import Modal from './Modal';

const Aboutme = ({ setMenuState }) => {
  const { data } = useSelector((state) => state?.githubData);
  const { starCount } = useSelector((state) => state?.starCountData);
  const [hovered, setHovered] = useState(false);

  if (!data) { return; }

  const closeDialog = (e) => {
    if (e.target === e.currentTarget) {
      setMenuState(false);
    }
  };
  const handleOpenModal = () => {
    setHovered(true);
  };

  const handleCloseModal = () => {
    setHovered(false);
  };
  return (
    <div className="aboutme" id="aboutme">
      <div className="left" onClick={(e) => closeDialog(e)}>
        <h1>
          <span>
            Web Developer
            <a href="#" onMouseEnter={handleOpenModal} className="moreinfo">See more..</a>

          </span>
          based in Kashmir, India!

        </h1>
        <ul className="statistics" onClick={(e) => closeDialog(e)}>
          <li style={{ padding: '0 1rem', border: '0' }}>
            <h3>
              <span>
                Contributions
              </span>
            </h3>
            <small>{data.public_repos}</small>
          </li>
          <li>
            <h3>
              <span style={{
                padding: '0',
                margin: '0',
                border: 'none',
              }}
              >
                Stars
              </span>
            </h3>
            <small>{starCount}</small>
          </li>
        </ul>
        {
          hovered
          && (

            <Modal handleCloseModal={handleCloseModal} hovered={hovered} />
          )
        }

      </div>
      <div className="right" onClick={(e) => closeDialog(e)}>
        <h1>Skillset</h1>
        <Skill />
        <footer>
          <a href="#portfolio">
            <i className="fa-solid fa-angle-up uparrow" />
          </a>
          <a href="#recommendation">
            <i className="fa-solid fa-angle-down downarrow" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Aboutme;
