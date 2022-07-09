import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className='App' >
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/contacto'>
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
