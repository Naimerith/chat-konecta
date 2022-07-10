import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contacto from './components/Contact/Contact';
import Login from './components/Login/Login';
import firebaseApp from './Firebase/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const auth = getAuth(firebaseApp);

function App() {
  const [userGlobal, setUserGlobal] = useState(null);


  /*revisa el estado del usuario */
  // onAuthStateChanged(auth, (userFirebase) => {
  //   console.log(userFirebase);
  //   if (userFirebase) {
  //     setUserGlobal(userFirebase);
  //     console.log('Inició sesion');
  //   } else {
  //     setUserGlobal(null);
  //     console.log('La sesion ha sido cerrada');
  //   }
  // })

  return (
    <div className='App'>
      {/* {userGlobal ? <>  <Header userGlobal={userGlobal} /> <Home /></> : <Login />} */}
      {<Router>
        <div className='App' >
          <Routes>
            <Route exact path='/' element={<Login />} >
            </Route>
            <Route path='/home' element={<Home />}>
            </Route>
            <Route path='/contacto' element={<Contacto />}>
            </Route>
          </Routes>
        </div>
      </Router>}
    </div>
  );
};

export default App;
