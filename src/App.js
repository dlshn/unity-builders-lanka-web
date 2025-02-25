import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import {About} from './pages/About';
import {Packages} from './pages/Packages';
import {Project}  from './pages/Project';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { MorePackages } from './components/MorePackages';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes basename="/personel-portfolio-2">
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MorePackages" element={<MorePackages />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
