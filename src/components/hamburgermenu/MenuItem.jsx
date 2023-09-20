/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

const MenuItem = ({ item, menuState, setMenuState }) => {
  console.log(item);
  return (
    <li onClick={() => setMenuState(!menuState)}>
      <a href={`#${item.toLowerCase()}`}>{item}</a>
    </li>
  );
};

export default MenuItem;
