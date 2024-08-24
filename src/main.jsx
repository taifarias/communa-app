import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="loginform" element={<LoginPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
