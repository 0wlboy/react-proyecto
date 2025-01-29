
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { LoginSign } from './assets/pages/pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='bg-green-100 dark:bg-blue-950 h-screen'>
        <Routes>
          <Route path='/' element={<LoginSign />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
