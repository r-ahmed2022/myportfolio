/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormComponent from './FormComponent';
import input from './componentData.js';
import './Contact.scss';

const Contact = ({ setMenuState }) => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [values, setValues] = useState({
    username: '',
    email: '',
    comment: '',
    isTextarea: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dubz95s', 'template_nwmnasi', ref.current,
      'IpD0p6arW-NVvf_ij')
      .then((result) => {
        setSuccess(true);
        console.log(result);
      }, (error) => {
        setSuccess(false);
        console.log(error.text);
      });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const closeDialog = (e) => {
    if (e.target === e.currentTarget) {
      setMenuState(false);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="left" onClick={(e) => closeDialog(e)}>
        <h1>Get in Touch</h1>
        <p style={{
          'font-size': '1.5rem',
          margin: '0 1rem 1.5rem',
        }}
        >
          Hey! let me know you,
          I'm waiting to hear your voice or see your message.
        </p>

        <iframe
          src="https://maps.google.com/maps?q=khanyar&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          id="gmap_canvas"
          frameBorder="0"
          scrolling="no"
          style={{ width: '300px', height: '200px', margin: '0rem 0' }}
        />
      </div>
      <div className="right">
        <div className="formcontainer">

          <form ref={ref} onSubmit={handleSubmit}>
            {input.map((input) => (
              <FormComponent
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
              />
            ))}
            <button type="submit">Submit</button>
            {success ? <span>Sent message, will get back soon</span> : ''}
          </form>
          <ul className="social-links">
            <li><a href="https://github.com/r-ahmed2022/" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-xl icons" /></a></li>
            <li><a href="https://www.linkedin.com/in/riyazahmedmicroverse" target="_blank" rel="noreferrer"><img src="images/linkedin.png" className="icons" alt="linkedin" /></a></li>

          </ul>
        </div>
        <footer>
          <a href="#recommendation">
            <i className="fa-solid fa-angle-up downarrow arrow" />
          </a>
        </footer>
      </div>

    </div>
  );
};

export default Contact;
