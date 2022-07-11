import React from 'react';
import Logo from '../images/logo.png';
import '../styles-sheets/Header.css';
import { Icon } from '@material-ui/core';

// const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider;


const Header = () => {
  // let navigate = useNavigate();
  // const redirect = () => {
  //   navigate('/')
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
          {<Icon>
            account_circle
          </Icon>}
        </p>
        <Icon className='icon-Notification'>
          notifications
        </Icon>
      </div>
    </div>
  )
}

export default Header;