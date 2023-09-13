import './aboutme.scss'
import Skill from './Skill'
export const Aboutme = () => {
  const openResumePDF = () => {
    const pdfURL = 'Riyaz-CV-developer.pdf';
    window.open(pdfURL, '_blank');
  };
  return (
    <div  className='aboutme' id="aboutme">
    <div className="left">
        <h1>Developer based in Kashmir, India!</h1>
        <ul className="statistics">
            <li><small>48</small><small>projects</small></li>
            <li><small>48</small><small>projects</small></li>
        </ul>
        <button type="button" className="resume"
         onClick={openResumePDF}>My Resume</button>
    </div>
    <div className="right">
      <h1>Skills</h1>
              <Skill /> 
              
      </div>
     
    </div>

  )
}
