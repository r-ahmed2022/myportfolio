/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState} from 'react'
import FormComponent from './FormComponent';
import input  from './componentData.js'
import { Map } from '@googlemaps/react-wrapper'

import './Contact.scss'
const Contact = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    comment: "",
    isTextarea: false
   })
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }
  const handleChange = (e) => {
    setValues({...values, 
      [e.target.name]: e.target.value
     })
    }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>Get in Touch</h1>
        <p style={{
          "font-size": "1.5rem",
          "margin": "0 1rem 1.5rem"
        }}>Hey! let me know you,
          I'm waiting to hear your voice or see your message.</p>
        
<iframe src="https://maps.google.com/maps?q=khanyar&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" 
style={{"width": "300px", "height": "200px", "margin":"1rem 0"}}>
              </iframe>
      </div>
      <div className="right">
        <div className="formcontainer">

          <form onSubmit={handleSubmit}>
            {input.map((input) => {
              return <FormComponent key={input.id} {...input} value={values[input.name]}
                onChange={handleChange} />;
            })}
            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact;