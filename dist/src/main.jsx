import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>              
          <Route path='/' element={<Home />} />
          <Route path='/loginform' element={<LoginPage />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
  
)
