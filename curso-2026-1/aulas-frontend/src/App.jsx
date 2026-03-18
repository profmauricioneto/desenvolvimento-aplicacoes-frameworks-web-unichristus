import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
        {/* Header com Navegação */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-indigo-600">
                Meu SPA
              </div>

              <ul className="flex space-x-2">
                <li>
                  <Link
                    to={'/'}
                    className="px-6 py-2 rounded-lg font-semibold text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/about'}
                    className="px-6 py-2 rounded-lg font-semibold text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/contacts'}
                    className="px-6 py-2 rounded-lg font-semibold text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Contatos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="*"
              element={
                <div className="text-center py-20">
                  <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                  <p className="text-xl text-gray-600">Página não encontrada</p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Exemplo de SPA - Desenvolvimento de Aplicações com Frameworks Web
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Feito com React + Vite + Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
