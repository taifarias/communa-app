import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/home.jsx';

import './index.css'
import LoginForm from './pages/LoginForm.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>     
           
          <Route path='/' element={<Home />} />
          <Route path='/loginform' element={<LoginForm />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
  
)
