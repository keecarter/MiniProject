import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


