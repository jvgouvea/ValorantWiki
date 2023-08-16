import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as VlrWikiLogo } from '../assets/icons/VMW.svg';

import HeaderMenu from '../resources/header-footer-menu';

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <NavLink to="/" end>
          <VlrWikiLogo />
        </NavLink>
        <ul className="header_menu">
          {HeaderMenu.map((item) => (
            <li key={item.id}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
