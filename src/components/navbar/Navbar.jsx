import './navbar.scss';

const Navbar = ({ menuState, setMenuState }) => (
  <nav className={`nav ${menuState && 'active'}`}>
    <div className="wrapper">
      <div className="left">
        <div className="hamburger" onClick={() => setMenuState(!menuState)}>
          <span />
          <span />
          <span />

        </div>
      </div>
      <div className="right">
        <span style={{ 'font-family': 'Roboto' }}>
          <i className="fa-solid fa-mobile-retro mail-icon" />
          +91-9796171751
        </span>
        <span style={{ 'font-family': 'Roboto' }}>
          <i
            className="fa-solid fa-envelope mail-icon"
            onClick={() => window.location = 'mailto:meesamriyaz@gmail.com'}
            style={{ cursor: 'pointer' }}
          />
          meesamriyaz@gmail.com
        </span>
      </div>

    </div>

  </nav>
);

export default Navbar;
