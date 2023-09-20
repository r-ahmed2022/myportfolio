import './hamburgermenu.scss';
import React from 'react';
import MenuItem from './MenuItem';

const HamburgerMenu = ({ menuState, setMenuState }) => {
  const menuitems = [
    'Intro',
    'Portfolio',
    'Aboutme',
    'Recommendation',
    'Contact',
  ];
  return (
    <ul className={`menu ${menuState && 'active'}`}>
      {
            menuitems.map((item) => <MenuItem key={item} item={item} menuState={menuState} setMenuState={setMenuState} />)
        }
    </ul>
  );
};

export default HamburgerMenu;
