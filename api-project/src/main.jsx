
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { getItem } from './utils/localStorage'
import { LoginSign, Home } from './assets/pages/pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='bg-green-100 dark:bg-blue-950 h-screen'>
        <Routes>
          {getItem({key: 'login'}) === undefined?(
            <Route path='/LoginSign' element={<LoginSign />}></Route>
          ) : (
            <Route path='/' element={<Home />}></Route>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
