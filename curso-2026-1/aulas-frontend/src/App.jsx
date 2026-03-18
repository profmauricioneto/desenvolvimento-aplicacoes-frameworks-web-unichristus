import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div>
        <Router>
          <nav>
            <ul className="flex p-4 justify-center">
              <li className="m-4 font-bold border-2 bg-amber-100 rounded p-4">
                <Link to={'/'}>Home</Link>
              </li>
              <li className="m-4 font-bold border-2 bg-amber-100 rounded p-4">
                <Link to={'/about'}>Sobre</Link>
              </li>
              <li className="m-4 font-bold border-2 bg-amber-100 rounded p-4">
                <Link to={'/contacts'}>Contatos</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
