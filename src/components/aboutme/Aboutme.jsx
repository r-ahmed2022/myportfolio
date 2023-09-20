/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import './aboutme.scss';
import Skill from './Skill';

const Aboutme = ({ setMenuState }) => {
  const { data } = useSelector((state) => state?.githubData);
  const { starCount } = useSelector((state) => state?.starCountData);

  if (!data) { return; }

  const closeDialog = (e) => {
    if (e.target === e.currentTarget) {
      setMenuState(false);
    }
  };

  return (
    <div className="aboutme" id="aboutme">
      <div className="left" onClick={(e) => closeDialog(e)}>
        <h1>
          <span style={{ margin: '0', padding: '0', 'font-size': '4rem' }}>Web Developer</span>
          {' '}
          based in Kashmir, India!
        </h1>
        <ul className="statistics" onClick={(e) => closeDialog(e)}>
          <li style={{ padding: '0 1rem', border: '0' }}>
            <h3>
              <span style={{
                padding: '0',
                margin: '0',
                border: 'none',
              }}
              >
                Contributions
              </span>
            </h3>
            <small>{data.public_repos}</small>
          </li>
          <li>
            <h3>
              <span style={{
                padding: '0',
                margin: '0',
                border: 'none',
              }}
              >
                Stars
              </span>
            </h3>
            <small>{starCount}</small>
          </li>
        </ul>
      </div>
      <div className="right" onClick={(e) => closeDialog(e)}>
        <h1>Skillset</h1>
        <Skill />
        <footer>
          <a href="#recommendation">
            <i className="fa-solid fa-angle-down downarrow" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Aboutme;
