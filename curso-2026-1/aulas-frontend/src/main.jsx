import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirstComponent, HelloWorld } from './components/FirstComponent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstComponent name="Mauricio" age={12} />
    <FirstComponent name="João" age={20} />
    <FirstComponent name="Pedro" age={40} />
    <HelloWorld />
  </StrictMode>
);
