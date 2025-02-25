import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assest/styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-center text-light py-3">
      <div className="container">
        {/* Navigation Links */}
        <div className="shortcuts mb-2">
          <a href="#contact" className="text-light mx-2 text-decoration-none">Contact</a>
          <a href="/" className="text-light mx-2 text-decoration-none">Home</a>
          <a href="#packages" className="text-light mx-2 text-decoration-none">Packages</a>
          <a href="#project" className="text-light mx-2 text-decoration-none">Projects</a>
          <a href="#about" className="text-light mx-2 text-decoration-none">About</a>
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


