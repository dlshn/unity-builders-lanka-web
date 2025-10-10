import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "../assest/styles/header.css";
import logo from "../assest/logo.jpg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    setIsLoggedIn(!!token);
  }, []);
  // Add background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleAuthChange = () => {
      const token = localStorage.getItem("admin_token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("authChange", handleAuthChange);
    handleAuthChange(); // run on mount

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className={`custom-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar container d-flex justify-content-between align-items-center">
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
          {!isLoggedIn ? (
            <Link to="/" onClick={() => setMenuOpen(false)} className="item">Home</Link>
          ) : (
            <Link to="/AdminDashboard" onClick={() => setMenuOpen(false)} className="item">Admin Dashboard</Link>
          )} 
          <Link to="/Packages" onClick={() => setMenuOpen(false)} className="item">House Packages</Link>
          <Link to="/Project" onClick={() => setMenuOpen(false)} className="item">Ongoing Projects</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="item">Interior 3D</Link>  {/* Interior 3D link to home page temporally*/}
          <Link to="/About" onClick={() => setMenuOpen(false)} className="item">About Us</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)} className="item">Contact Us</Link>
          <Link to="/InteriorAdd" onClick={() => setMenuOpen(false)} className="item">Create Interior Template</Link> {/* Link to InteriorAdd page */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="btn btn-danger btn-sm ms-3"
              style={{ borderRadius: "10px" }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
