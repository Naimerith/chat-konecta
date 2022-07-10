import React from 'react';
import firebaseApp from '../../Firebase/credenciales';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Logo from '../../images/logo.png';
import '../Login/style-sheets-login/Login.css'

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const loginWithGoogle = () => {
    signInWithRedirect(auth, googleProvider);
  };
  return (
    <div className='login-with-google' >
      <img className='img-logo' src={Logo} alt="" />
      <button className='btn-login' onClick={loginWithGoogle}>Acceder con Google</button>
    </div>
  )
}

export default Login