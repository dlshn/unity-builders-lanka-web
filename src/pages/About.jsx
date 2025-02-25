import React from "react";
import Typewriter from "typewriter-effect";
import image_left from "../assest/about-left.jpg";
import { Heading } from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assest/styles/about.css";

export const About = () => {
  return (
    <section className="about-us-section">
      <Heading title="About Us" />
      <div className="container">
        <div className="row align-items-center about-container">
          
          {/* Left Side - Image  */}
          <div className="col-lg-6 text-center left-box">
            <div className="image-wrapper">
              <img src={image_left} alt="Team Collaboration" className="img-fluid" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 right-box">
            <h2 className="about-title">
              <Typewriter
                options={{
                  strings: ["Who We Are ?"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h2>

            <p className="about-text">
              Unity Builders Lanka is a leading construction company in Sri Lanka, known for delivering innovative, environmentally friendly, and high-quality solutions.
            </p>
            <p className="about-text">
            We specialize in efficient home construction, offering competitive pricing, excellent customer service, and timely project completion, with projects completed in as little as six months.
            </p>
            <h3 className="text-align-center text-light service-title">Services</h3>
            <div className="text-light service-list">
              <ul>
                <li>Architectural Design Services</li>
                <li>2D and 3D Designs</li>
                <li>Interior Designs</li>
                <li>Structural Designs</li>
                <li>Building Design and Construction (Residential and Commercial)</li>
                <li>Civil Engineering Consulting</li>
                <li>Renovation Building Construction Works</li>
              </ul>
            </div>

            <p className="about-location">
              <strong>Location:</strong> No:72, Dandugama, Ja-Ela, Gampaha.
            </p>

            <a href="#contact" className="custom-btn">Contact Us</a>
          </div>

        </div>
      </div>
    </section>
  );
};
