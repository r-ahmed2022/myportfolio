import './hamburgermenu.scss';
import React from 'react'
import MenuItem from   './MenuItem'

const HamburgerMenu = ({menuState, setMenuState}) => {
    const menuitems = [
        "Intro",
        "Portfolio",
        "Testimonials",
        "Works",
    ]
  return (
    <ul className={"menu " + (menuState && 'active')} >
        {
            menuitems.map((item) => {
                return <MenuItem key={item} item={item} menuState={menuState} setMenuState={setMenuState} />
            })
        }
    </ul>
  )
}

export default HamburgerMenu;