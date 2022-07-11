import './App.css';
import React from 'react';
import Home from './views/Home';
import Contacto from './views/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {
        <Router>
          <div className='App' >
            <Routes>
              <Route exact path='/' element={<Home />} >
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
