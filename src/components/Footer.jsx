import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LinkedinIcon } from '../assets/icons/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github-icon.svg';

import FooterMenu from '../resources/header-footer-menu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_disclaimer">
          <p className="footer_disclaimer__title">© Copyright Valorant Wiki</p>
          <p className="footer_disclaimer__text">
            Valorant Wiki é um site não oficial e não endossada pela Riot Games
            de forma alguma. Riot Games, Valorant e todas as propriedades
            associadas são marcas comerciais ou marcas registradas da Riot
            Games, Inc.
          </p>
        </div>
        <div className="footer_menu">
          <ul>
            {FooterMenu.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer_social'>
          <p>Desenvolvido por João Victor Gouvêa</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jvgouvea/" target='_blank' rel="noreferrer">
                <LinkedinIcon />
              </a>
            </li>
            <li>
            <a href="https://github.com/jvgouvea" target='_blank' rel="noreferrer">
                <GithubIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
