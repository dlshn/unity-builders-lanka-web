import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../assest/styles/hero.css";
import logo from "../assest/logo.png";

export const Hero = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container text-center">
        <img src={logo} alt="Unity Builders Lanka logo" className="hero-logo" data-aos="flip-left" />
        <h1 className="hero-heading" data-aos="">
          <Typewriter
            options={{
              strings: ["Unity Builders Lanka"],
              autoStart: true,
              loop: true,
              typeSpeed: 50
            }}
          />
        </h1>
        <h3 className="subheading" data-aos="fade-up" data-aos-delay="500">We Build Your Dreams.</h3>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="1000">
        As a leading construction company in Sri Lanka, we are committed to delivering quality and innovation, building your future with excellence.
        </p>
        <Link to="/Packages" className="hero-btn" data-aos="fade-up" data-aos-delay="1500">
          <b>House Packages</b>
        </Link>
      </div>
    </section>
  );
};
