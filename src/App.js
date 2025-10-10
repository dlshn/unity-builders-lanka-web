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
import AddPackageForm from './pages/Admin/PackageAdd';
import ProjectAdd from './pages/Admin/ProjectAdd';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UpdatePackage from "./pages/Admin/UpdatePackage";
import Interior_3D from './pages/Interior_3D';
import InteriorAdd from './pages/Admin/InteriorAdd'; // Import the new InteriorAdd page

import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component

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
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddPackage" element={<AddPackageForm />} />
          <Route path="/ProjectAdd" element={<ProjectAdd />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/update-package/:id" element={<UpdatePackage />} />
          <Route path="/Interior_3D" element={<Interior_3D />} />
          <Route path="/InteriorAdd" element={<InteriorAdd />} /> 
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
