import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import "../assest/styles/contact.css";
import { Heading } from "../components/Heading";

export const Contact = () => {
  return (
    <div className="contact">
      <Heading title="Contact us" />
      <div className="container py-4 blur-box">
        <div className="row align-items-center">
          {/* Contact Info Section */}
          <div className="col-lg-6 text-light contact-info">
            <h2 className="mb-4 fw-bold text-center">
              <Typewriter
                options={{
                  strings: ["Contact"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  pauseFor: 5000,
                }}
              />
            </h2>
            <p>
              <FaHouseChimney className="text-dark me-2" /> <strong>Address:<br/></strong>
              NO:72, Dandugama, Ja-Ela, Sri Lanka.
            </p>
            <p>
              <FaPhoneSquareAlt className="text-success me-2" /> <strong>Call:<br/></strong>
              <strong><a href="tel:+94 113771045" className="text-light">0113771045</a></strong> | {" "}
              <strong><a href="tel:+94 768763292" className="text-light">0768763292</a></strong> | {" "}
              <strong><a href="tel:+94 713750557" className="text-light">0713750557</a></strong>
            </p>
            <p className="email">
              <FaEnvelope className="text-danger me-2 email-icon" /> <strong>Email:<br/></strong>
              <a href="mailto:unitybuilderslanka@gmail.com" className="text-light">unitybuilderslanka@gmail.com</a>
            </p>
            <p className="facebook">
              <FaFacebook className="me-2 text-primary fb-icon" /> <strong>Facebook:<br/></strong>
              <a
                href="https://facebook.com/UnityBuildersLanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fw-bold"
              >Unity Builders Lanka</a>
            </p>
            <p className="website">
              <AiOutlineGlobal className="text-dark web-icon" /> <strong>Website:<br/></strong>
              <a href="https://www.unitybuilderslanka.com" className="text-light">www.unitybuilderslanka.com</a>
            </p>
          </div>

          {/* Google Map Section */}
          <div className="col-lg-6 map-info">
            <h2 className="mb-4 fw-bold text-center">Location</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.252173250844!2d79.8865237!3d7.0967429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f10063b2ea3b%3A0x6cd5f1699e850aff!2sUnity%20Builder's%20Lanka!5e0!3m2!1sen!2slk!4v1740861450127!5m2!1sen!2slk" 
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: "15px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
