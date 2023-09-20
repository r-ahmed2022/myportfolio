/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const PortfolioList = ({
  id, name, active, setSelected,
}) => (
  <li className={active ? 'itemlist active' : 'itemlist'} onClick={() => setSelected(id)}>
    {name}
  </li>
);

export default PortfolioList;
