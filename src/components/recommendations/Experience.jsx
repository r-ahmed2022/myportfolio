import React from 'react'
import './experience.scss'


const Experience = ({recommendation}) => {
 const {name, image, profession, place, comment} = recommendation;
 console.log(name);
 return (
    <li  className="experience">
        <div>
                <h4>
                {name}
                </h4>
                <span>
                    <img src={image} alt="pic" />
                </span>
        </div>
   </li> 
 
 )
}

export default Experience;