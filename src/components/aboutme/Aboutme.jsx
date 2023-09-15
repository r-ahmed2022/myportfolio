import { useSelector, useDispatch } from 'react-redux';
import './aboutme.scss'
import Skill from './Skill'

export const Aboutme = () => {
  const dispatch = useDispatch();
  const {email} = useSelector((state) => state?.githubInfo.info)

  return (
    <div  className='aboutme' id="aboutme">
    <div className="left">
        <h1>Developer based in Kashmir, India!</h1>
        <ul className="statistics">
            <li><small>48</small><small>projects</small></li>
            <li><small>48</small><small>projects</small></li>
        </ul>
       
    </div>
    <div className="right">
      <h1>Skills</h1>
              <Skill /> 
              <footer><a href="#recommendation"><i class="fa-solid fa-angle-down downarrow"></i></a></footer>
  
      </div>

    </div>

  )
}
