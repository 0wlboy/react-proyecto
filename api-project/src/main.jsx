
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { getItem } from './utils/localStorage'
import { LoginSign, App } from './assets/pages/pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <div className='bg-green-100 dark:bg-blue-950 h-screen'>
          <App></App>
      </div>
    
  </StrictMode>
)
