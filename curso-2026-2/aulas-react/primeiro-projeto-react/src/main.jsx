import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirstComponent from './components/FirstComponent'
import Greeting from './components/Greetings'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>Hello World From React</h2>
    <FirstComponent />
    <Greeting name="Mauricio" age={36}/>
  </StrictMode>,
)
