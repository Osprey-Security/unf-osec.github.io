import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Resources from './Resources';
import Home from './Home';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);
