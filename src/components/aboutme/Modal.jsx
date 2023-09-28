/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import './modal.scss';

const Modal = ({ handleCloseModal, hovered }) => (
  <div className={`modal-content ${hovered ? 'active' : 'modal-content'}`} onMouseLeave={handleCloseModal}>
    <h1>Greetings!</h1>

    <p>
      Welcome to my portfolio—a showcase of creativity, precision,
      and innovation.
      <h5>As a web developer, my keyboard has more commits than my GitHub repository.  🚀 </h5>
      <br /><br /><br />
      <h6>
        Let's code the future together💻!
      </h6>

    </p>
  </div>
);

export default Modal;
