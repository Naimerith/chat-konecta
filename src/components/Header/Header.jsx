import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import '../Header/style-sheets-header/Header.css';
import { Icon } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import firebaseApp from '../../Firebase/credenciales';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

// const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider;


const Header = (userGlobal) => {
  console.log(userGlobal.displayName);
  // let navigate = useNavigate();
  // const redirect = () => {
  //   navigate('/')
  // };

  // const loginConGoogle = () => {
  //   signInWithRedirect(auth, googleProvider);
  // };


  // const redirectLogin = () => {
  //   navigate('/login')
  // };

  return (
    <div className='container-header'>
      <img className='image-logo' src={Logo} alt="Logo Talent Innovation" />
      {/* // onClick={redirect} /> */}
      <div className='header-user'>
        <p className='section-userLogged'>
          {userGlobal.displayName}
          {/* <Icon>
            account_circle
          </Icon> */}
        </p>
        <Icon className='icon-Notification'>
          notifications
        </Icon>
      </div>
    </div>
  )
}

export default Header;