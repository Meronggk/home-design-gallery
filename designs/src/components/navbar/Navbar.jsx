import React from 'react';
import { UilBars } from '@iconscout/react-unicons';
import { UilMultiply } from '@iconscout/react-unicons';
import classnames from 'classnames';

import './navbar.scss';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="container">
      <header className="header">
        <a className="header__logo" href="#">
          DESIGN
        </a>

        <nav
          onClick={toggleMenu}
          className={classnames('navbar', {
            'show-menu': isMenuOpen
          })}
        >
          <div className="navbar__close navbar__icon" onClick={toggleMenu}>
            <UilMultiply />
          </div>

          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Livingrooms
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Bedrooms
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Kitchen
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Bathroom
              </a>
            </li>
            <li className="navbar__item navbar__buy">
              <a className="navbar__link navbar__buy-link" href="#">
                CHOOSE
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar__menu navbar__icon" onClick={toggleMenu}>
          <UilBars />
        </div>
      </header>
    </div>
  );
};

export default Navbar;