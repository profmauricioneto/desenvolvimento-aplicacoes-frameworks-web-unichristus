import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import NavigationBar from './components/NavigationBar';

// import TaskList from "./components/Exercicios3/TaskList";
// import UsandoChildren from "./components/UsandoChildren";

// import ContadorCliques from "./components/Hooks/ContadorCliques";
// import ExemploInput from "./components/Hooks/ExemploInput";

import Cadastro from "./components/ExercicioCadastro/Cadastro";
import Login from "./components/ExercicioCadastro/Login";
import ShowPosts from './components/ExercicioUseEffect/ShowPosts';
const App = () => {
    return (
      // <Router>
      //   < NavigationBar />
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/about" element={<About />} />
      //     <Route path="/contact" element={<Contact />} />
      //   </Routes>
      // </Router>
      <>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/posts" element={<ShowPosts />}/>
          </Routes>
        </Router>

        {/* <TaskList />
        <UsandoChildren /> */}

        {/* <ContadorCliques />
        <ExemploInput /> */}
      </>
    );
}

export default App;