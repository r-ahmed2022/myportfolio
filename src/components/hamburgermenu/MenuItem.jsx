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
