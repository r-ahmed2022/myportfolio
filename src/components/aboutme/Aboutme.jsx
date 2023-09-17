/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector} from 'react-redux';
import './aboutme.scss';
import Skill from './Skill';

export const Aboutme = () => {
  const { data } = useSelector((state) => state?.githubData); 
 if(!data)
 return
 

  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <h1>Developer based in Kashmir, India!</h1>
        <ul className="statistics">
          <li style={{"padding": "0 1rem","border" : "0"}}>
            <h3><span style={{"padding" : "0", "margin" : "0",
             "border" : "none"}}>Projects</span></h3>
            <small style={{"font-size" : "1.5rem"}}>{data.public_repos}</small>
          </li>
          <li>
            <small>48</small>
            <small>projects</small>
          </li>
        </ul>
      </div>
      <div className="right">
        <h1>Skills</h1>
        <Skill />
        <footer>
          <a href="#recommendation">
            <i className="fa-solid fa-angle-down downarrow"></i>
          </a>
        </footer>
      </div>
    </div>
  );
};
