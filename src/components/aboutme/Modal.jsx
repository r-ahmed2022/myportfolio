/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import './modal.scss';

const Modal = ({ handleCloseModal, hovered }) => (
  <div className={`modal-content ${hovered ? 'active' : 'modal-content'}`} onMouseLeave={handleCloseModal}>
    <small className="close" onClick={handleCloseModal}>&times;</small>

    <h1>About Me</h1>

    <p style={{ textAlign: 'center' }}>
      👋 Hey there! I'm <h1 style={{ display: 'inline' }}>Riyaz Ahmed</h1>
      a passionate Web Developer based in the picturesque region of Kashmir, India. 🏔️
      🌟 As a full-stack developer, I navigate through both the front-end and back-end realms,
      ensuring seamless functionality and delightful user experiences.
      From crafting elegant user interfaces to optimizing database queries, I handle it all!
      <br /><br /><br />
      <h6>
        <h5>As a web developer, my keyboard has more commits than my GitHub repository.  🚀 </h5>

        Let's code the future together💻!
      </h6>

    </p>
  </div>
);

export default Modal;
