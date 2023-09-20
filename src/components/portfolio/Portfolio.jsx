import React, { useState, useEffect } from 'react';
import './Portfolio.scss';
import PortfolioList from './PortfolioList';
import {
  cssPortfolio,
  javascriptPortfolio,
  reactPortfolio,
  railsPortfolio,
} from '../../data';

export const Portfolio = ({ setMenuState }) => {
  const [selected, setSelected] = useState('html/css');
  const [project, setProject] = useState([]);
  const portFolioItems = [
    {
      id: 'html/css',
      name: 'Html/CSS Projects',
    },
    {
      id: 'javascript',
      name: 'Javascript Projects',
    },
    {
      id: 'react',
      name: 'React-JS Projects',
    },
    {
      id: 'rails',
      name: 'Rails Projects',
    },
  ];
  const closeDialog = (e) => {
    if (e.target === e.currentTarget) {
      setMenuState(false);
    }
  };
  useEffect(() => {
    switch (selected) {
      case 'html/css':
        setProject(cssPortfolio);
        break;
      case 'javascript':
        setProject(javascriptPortfolio);
        break;
      case 'react':
        setProject(reactPortfolio);
        break;
      case 'rails':
        setProject(railsPortfolio);
        break;
      default:
        setProject(cssPortfolio);
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
        <div className="portfolio-tabs-section" onClick={(e) => closeDialog(e)}>
          <h1>Portfolio</h1>
          <ul className="portfolio-tabs" onClick={(e) => closeDialog(e)}>
            {
                portFolioItems.map((item) => (
                  <PortfolioList
                    active={selected === item.id}
                    setSelected={setSelected}
                    name={item.name}
                    id={item.id}
                  />
                ))
            }
          </ul>
        </div>
        <div className="projects" onClick={(e) => closeDialog(e)}>
          {
            project.map((item) => (
              <div className="card">
                <img src={item.img} alt="pic" className="demoimg" />
                <span><a href={item.url}>Live link</a></span>
                <h6>{item.title}</h6>
                <i className="fa-brands fa-github fa-xs demoicons" />
              </div>
            ))
          }
          <footer><a href="#aboutme"><i className="fa-solid fa-angle-down downarrow" /></a></footer>

        </div>

      </div>

    </div>
  );
};
