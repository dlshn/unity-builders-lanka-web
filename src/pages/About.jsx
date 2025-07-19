import React from "react";
import Typewriter from "typewriter-effect";
import image_left from "../assest/about-left.jpg";
import { Heading } from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assest/styles/about.css";

export const About = () => {
  return (
    <section className="about-us-section">
      <Heading title="About Us" data-aos="fade-down" />
      <div className="container">
        <div className="row align-items-center about-container">          
          {/* Left Side - Image  */}
          <div className="col-lg-6 text-center left-box">
            <div className="image-wrapper" data-aos="flip-up">
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

            <p className="about-text" data-aos="fade-up" data-aos-delay="200">
            With over 16 years of experience in the industry, we take pride in delivering high-quality construction solutions tailored to our clients' needs. Our expertise spans various aspects of construction, ensuring precision, durability, and excellence in every project we undertake.
            </p>
            <p className="about-text" data-aos="fade-up" data-aos-delay="300">
            Currently, we provide our services within the Western Province, but we are expanding our reach and are excited about future projects across the island.
            </p>
            <p className="about-text" data-aos="fade-up" data-aos-delay="400">
            Our team consists of highly skilled and dedicated professionals, including experienced civil engineers, quantity surveyors, site supervisors, and architects. We are committed to maintaining a friendly and collaborative approach, ensuring seamless project execution and customer satisfaction.
            </p>

            
          </div>

        </div>
        <div className="bottom-box">
          <h3 className="service-title text-align-center text-light" data-aos="zoom-in">Our Services</h3>
            <div className="service-list text-light mb-3">
              <ul>
                <li className="li1">Architectural Design Services</li>
                <li className="li2">2D and 3D Designs</li>
                <li className="li3">Interior Designs</li>
                <li className="li4">Structural Designs</li>
                <li className="li5">Building Design and Construction (Residential and Commercial)</li>
                <li className="li6">Civil Engineering Consulting</li>
                <li className="li7">Renovation Building Construction Works</li>
              </ul>
            </div>
            <a href="contact" className="custom-btn" data-aos="fade-up">Contact Us</a>
        </div>
      </div>
    </section>
  );
};
