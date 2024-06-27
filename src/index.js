import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import Rwr from './components/Rwr';
import About6 from './components/About6';
import About9 from './components/About9';
import About595 from './components/about595';
import About10 from './components/About10';
import About65 from './components/About65';
import About66 from './components/About66';
import reportWebVitals from './reportWebVitals';

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root1'));
const root44 = ReactDOM.createRoot(document.getElementById('root44'));

root1.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/welcome" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about6" element={<About6 />} />
        <Route path="/about9" element={<About9 />} />
        <Route path="/about595" element={<About595 />} />
        <Route path="/about10" element={<About10 />} />
        <Route path="/uploader" element={<About65 />} />
        <Route path="/display/:number" element={<About66 />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

if (root2) {
  root2.render(
    <React.StrictMode>
      <Router>
        <Routes> 
          <Route path="/pVt2Gk8Aq4Jm1Ew7Sx3Lc5Ov9Iu6Qy0Nz9Rp7Xh4Yg1Tb0Hw8Jr5Kx2Gz0Pn9" element={<Rwr />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

if (root44) {
  root44.render(
    <React.StrictMode>
      <Router>
        <Routes> 
        <Route path="/about9" element={<about9 />} />
          <Route path="/about595" element={<about595 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
reportWebVitals();