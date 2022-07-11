import './App.css';
import React from 'react';
//import firebaseApp from './Firebase/credenciales';
import Home from './views/Home';
import Contacto from './views/Contact';
import Login from './views/Login';
//import { getAuth } from 'firebase/auth';
//import { useAuthState } from 'react-firebase-hooks/auth';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
//const auth = getAuth(firebaseApp);

function App() {
  // const [user] = useAuthState(auth);
  return (
    // <>
    //   {user ? <Home /> : <Login />}
    // </>
    <div className='App'>
      {
        <Router>
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
        </Router>
      }
    </div >
  );
};

export default App;
