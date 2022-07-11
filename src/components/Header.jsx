import React from 'react';
import { Icon } from '@material-ui/core';
import Logo from '../images/logo.png';
import '../styles-sheets/Header.css';

const Header = () => {
  return (
    <div className='container-header'>
      <img className='image-logo' src={Logo} alt="Logo Talent Innovation" />
      <div className='header-user'>
        <p className='section-userLogged'> Naimerith Magdaleno
          {<Icon>
            account_circle
          </Icon>}
        </p>
        <Icon className='icon-Notification'>
          notifications
        </Icon>
      </div>
    </div>
  );
}

export default Header;