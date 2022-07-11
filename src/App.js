import './App.css';
import React, { useState } from 'react';
import Home from './views/Home';
import Contacto from './views/Contact';
import Login from './views/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mentorActive, setMentorActive] = useState(null);

  return (
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
