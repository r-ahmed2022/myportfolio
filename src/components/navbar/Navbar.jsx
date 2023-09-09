import './navbar.scss'
const Navbar = ({menuState, setMenuState}) => {
  return (
    <nav className={"nav " + (menuState && 'active')}>
      <div className="wrapper">
      <div className="left">
               <div className="hamburger" onClick={() => setMenuState(!menuState)}>
                  <span></span>
                  <span></span>
                  <span></span>

               </div>
        </div>
        <div className="right">
          <span><i className="fa-solid fa-envelope mail-icon"></i>meesamriyaz@gmail.com</span>
        </div>
       
      </div>
    
    </nav>
  )
}

export default Navbar;