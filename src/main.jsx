import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/home.jsx';
import Login from './pages/Login.jsx';
import Posts from './pages/Posts.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
        
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='posts/:id' element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
  
)
