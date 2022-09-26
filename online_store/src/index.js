import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'macro-css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
     <App />
    </Router>
     
  // </React.StrictMode>
);

