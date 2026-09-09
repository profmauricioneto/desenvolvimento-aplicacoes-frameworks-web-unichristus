import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavigationBar from './components/NavigationBar';

const App = () => {
    return (
      <Router>
        < NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
}

export default App;