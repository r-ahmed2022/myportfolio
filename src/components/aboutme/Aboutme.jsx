import './aboutme.scss'
import Skill from './Skill'
export const Aboutme = () => {

  return (
    <div  className='aboutme' id="aboutme">
    <div className="left">
        <h1>Developer based in Kashmir, India!</h1>
        <span>Minimalistic design caters well to business</span>

    </div>
    <div className="right">
      <h1>Skills</h1>
              <Skill /> 
              
      </div>
     
    </div>

  )
}
