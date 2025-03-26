import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Flowbite } from 'flowbite-react'
import App from './App.tsx'


window.name="beequeen";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Flowbite>
        <App />
    </Flowbite>
  </StrictMode>,
)
