import React, { useState, useEffect } from 'react'
import './Portfolio.scss'
import PortfolioList from './PortfolioList'
import { cssPortfolio,
         javascriptPortfolio,
         reactPortfolio,
         railsPortfolio } from '../../data'

export const Portfolio = () => {
  const [selected, setSelected] = useState("html/css");
  const [project, setProject] = useState([]);
  const portFolioItems = [
    {
      id: "html/css",
      name: "Html/CSS Projects"
    },
    {
      id: "javascript",
      name: "Javascript Projects"
    },
    {
      id: "react",
      name: "React-JS Projects"
    },
    {
      id: "rails",
      name: "Rails Projects"
    },
]
  useEffect(() => {

    switch(selected) {
       case "html/css":
       setProject(cssPortfolio);
       break;
       case "javascript":
       setProject(javascriptPortfolio);
       break;
       case "react":
       setProject(reactPortfolio);
       break;
       case "rails":
       setProject(railsPortfolio);
       break;
       default:
       setProject(cssPortfolio);
       break;
    }

  }, [selected])
  return (
    <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
    <div className="wrapper">
      <ul className="portfolio-tabs">
         {
            portFolioItems.map((item) => (
              <PortfolioList active={selected === item.id} 
              setSelected={setSelected} name={item.name}
                id={item.id}
              />
            ))
         }
      </ul>
      <div className="projects">
          {
            project.map((item) => (
              <div className="card">
                 <img src={item.img} alt="pic" className="demoimg" />
                  <span><a href={item.url}>Live link</a></span>
                 <h1>{item.title}</h1>
              </div>
            ))
          }

      </div>
      </div>
    </div>
  )
}
