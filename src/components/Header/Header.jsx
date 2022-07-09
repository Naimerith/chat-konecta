import React from 'react';
import Logo from '../../images/logo.png';
import '../Header/style-sheets-header/Header.css';
import { Icon } from '@material-ui/core';

const Header = () => {
  return (
    <div className='container-header'>
      <img className='image-logo' src={Logo} alt="Logo Talent Innovation" />
      <div className='header-user'>
        <section className='section-userLogged'>
          <p>Naimerith</p>
          <Icon>
            account_circle
          </Icon>
        </section>
        <Icon className='icon-Notification'>
          notifications
        </Icon>
      </div>
    </div>
  )
}

export default Header;