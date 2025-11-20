import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../assest/styles/hero.css";
import logo from "../assest/logo.jpg";

export const Hero = () => {
  return (

    <section className="hero d-flex align-items-center">
      <div className="container-fluid text-center px-0">
        <div class="alert alert-success mb-4 mt-0 fs-6 fs-sm-5 py-2 py-sm-3 sinhala-font" role="alert">
          දැන් කුරුණෑගල අවට ඔබටත් <strong>Unity Builders Lanka</strong> හරහා සේවාවන් ලබාගත හැක. <strong><a href="tel:+94 719460945" className="text-dark"> 0719460945</a></strong>
        </div>
        <img src={logo} alt="Unity Builders Lanka logo" className="hero-logo mt-0" data-aos="flip-left" />
        <h1 className="hero-heading">

          <Typewriter
            options={{
              strings: ["Unity Builders Lanka"],
              autoStart: true,
              loop: true,
              typeSpeed: 50
            }}
          />
        </h1>
        <h3 className="subheading" data-aos="fade-up">We Build Your Dreams.</h3>
        <p className="hero-description" data-aos="fade-up">
        As a leading construction company in Sri Lanka, we are committed to delivering quality and innovation, building your future with excellence.
        </p>
        <Link to="/Project" className="hero-btn" data-aos="fade-up"> 
          <b>Ongoing Projects</b>
        </Link>
      </div>
    </section>
  );
};
