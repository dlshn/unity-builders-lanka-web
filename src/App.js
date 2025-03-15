import React from 'react';
import { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import {About} from './pages/About';
import {Packages} from './pages/Packages';
import {Project}  from './pages/Project';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';


import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


function App() {  
  useEffect(() => {  // for AOS animations
    
    AOS.init({
      duration: 1000, // Animation duration (1s)
      once: false, // Animation runs once per scroll
    });
  }, []);

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
