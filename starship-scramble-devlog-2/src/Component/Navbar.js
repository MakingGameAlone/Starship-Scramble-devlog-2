import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/Starship-Scramble-devlog-2' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={process.env.PUBLIC_URL +'/images/StarshipScramble_Logo.png'} alt="Starship Scramble Logo" />
            Starship Scramble
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Starship-Scramble-devlog-2' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/Starship-Scramble-devlog-2/feature'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Features
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Starship-Scramble-devlog-2/Study&Research'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Study & Research
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;