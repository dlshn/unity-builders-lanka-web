import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assest/styles/header.css";
import logo from "../assest/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`custom-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar container d-flex justify-content-between align-items-center py-2">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Unity Builders Lanka" className="logo-img" />
        </Link>

        {/* Mobile Menu Icon */}
        <button className="menu-icon d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Packages" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link to="/Project" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};
