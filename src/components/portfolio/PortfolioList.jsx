import React from 'react'

const PortfolioList = ({id, name, active, setSelected}) => {
  return (
    <li className={active ? "itemlist active" : "itemlist"} onClick={() => setSelected(id)}>
        {name}
    </li>
  )
}

export default PortfolioList;