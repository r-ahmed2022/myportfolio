import React, { useState} from 'react'
import FormComponent from './FormComponent';
import input  from './componentData.js'

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
    <div className='contact'>
     <div className="left">
     <h1>Get in Touch</h1>
     <p style={{"font-size": "1.5rem",
      "margin": "0 1rem 1.5rem"}}>Hey! let me know you, 
        I'm waiting to hear your voice or see your message.</p>
    
       
    </div>
    <div className="right">
    <div className="formcontainer">

    <form onSubmit={handleSubmit}>
    {
      input.map((input) => {
       return <FormComponent key={input.id} {...input} value={values[input.name]}
       onChange={handleChange} />
     })

    }
    <button type="submit">Submit</button>
    </form>
  
      </div>
    </div>
    </div>
  )
}

export default Contact;