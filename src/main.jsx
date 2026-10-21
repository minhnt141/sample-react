import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting name="John"/>
    <Greeting name="Alice" />
  </StrictMode>,
)
