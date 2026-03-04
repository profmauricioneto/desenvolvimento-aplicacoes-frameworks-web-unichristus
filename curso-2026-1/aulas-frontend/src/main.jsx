import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { FirstComponent, HelloWorld } from './components/FirstComponent';
// import { CalculadoraIdade, Saudacao } from './components/ComponenteExercicio';
import UserList from './components/exercicio01/UserList';
// import ConteudoCard from './components/exercicio01/ConteudoCard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FirstComponent name="Mauricio" age={12} />
    <FirstComponent name="João" age={20} />
    <FirstComponent name="Pedro" age={40} />
    <HelloWorld /> */}
    {/* <Saudacao name="Mauricio" />
    <CalculadoraIdade age={36} /> */}
    <UserList />
    {/* <ConteudoCard /> */}
  </StrictMode>
);
