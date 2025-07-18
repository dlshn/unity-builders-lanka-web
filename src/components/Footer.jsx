import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assest/styles/footer.css";
import { Link } from "react-router-dom"; 

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-center text-light py-3">
      <div className="container">
        {/* Navigation Links */}
        <div className="shortcuts mb-2">
          <Link to="/" className="text-light mx-2 text-decoration-none">Home</Link>
          <Link to="/Contact" className="text-light mx-2 text-decoration-none">Contact</Link>
          <Link to="/Packages" className="text-light mx-2 text-decoration-none">Packages</Link>
          <Link to="/Project" className="text-light mx-2 text-decoration-none">Projects</Link>
          <Link to="/About" className="text-light mx-2 text-decoration-none">About</Link> |
          <Link to="/AdminLogin" className="text-light mx-2 text-decoration-none">Admin Login</Link>
        </div>

        {/* Horizontal Line */}
        <hr className="w-75 mx-auto text-light" />

        {/* Copyright */}
        <div>
          <p className="mb-0">&copy; {new Date().getFullYear()} Unity Builders Lanka</p>
        </div>
      </div>
    </footer>
  );
};


