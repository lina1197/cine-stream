import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 
"react-router-dom";
import Home from './components/home';
import reportWebVitals from './reportWebVitals';

import { HomePage, Play } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/Play" element={<Play/>} />




       </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
