import React from "react";
import Typewriter from "typewriter-effect";
import "../assest/styles/hero.css";

export const Hero = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container text-center">
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
        <h3 className="subheading">We Build Your Dreams.</h3>
        <p className="hero-description">
        As a leading construction company in Sri Lanka, we are committed to delivering quality and innovation, building your future with excellence.
        </p>
        <a href="#packages" className="hero-btn">
          <b>House Packages</b>
        </a>
      </div>
    </section>
  );
};
