import React, { useEffect } from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { AiOutlineGlobal } from "react-icons/ai";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerImg from "../assest/location.png";
import "../assest/styles/contact.css";
import { Heading } from "../components/Heading";
import Typewriter from "typewriter-effect";

const MapView = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 15);
  }, [center, map]);

  return null;
};

const customIcon = new L.Icon({
  iconUrl: markerImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export const Contact = () => {
  const location = [7.096824, 79.886565];

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
            <p className="">
              <FaHouseChimney className="text-dark me-2 " /> <strong className="">Address:<br/> </strong>
               NO:72, Dandugama, Ja-Ela, Sri Lanka.
            </p>
            
            <p>
              <FaPhoneSquareAlt className="text-success me-2" /> <strong>Call:<br/> </strong>
              <strong><a href="tel:+94 113771045" className="text-light">0113771045</a></strong> | {" "}
              <strong><a href="tel:+94 768763292" className="text-light">0768763292</a></strong> | {" "}
              <strong><a href="tel:+94 713750557" className="text-light">0713750557</a></strong>
            </p>
            <p className="email">
              <FaEnvelope className="text-danger me-2 email-icon" /> <strong>Email:<br/> </strong>
              <a href="unitybuilderslanka@gmail.com" className="text-light">unitybuilderslanka@gmail.com</a>
            </p>
            <p className="facebook">
              <FaFacebook className="me-2 text-primary fb-icon" /> <strong>Facebook:<br/> </strong>
              <a
                href="https://facebook.com/UnityBuildersLanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fw-bold"
              >Unity Builders Lanka</a>
                
                
            </p>
            <p className="website">
              <AiOutlineGlobal className="text-dark web-icon" /> <strong >Website:<br/> </strong>
              www.unitybuilderslanka.com
            </p>
          </div>

          {/* Map Section */}
          <div className="col-lg-6 map-info">
            <h2 className="mb-4 fw-bold text-center">Location</h2>
            <div className="map-container">
              <MapContainer
                center={location}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <MapView center={location} />
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={location} icon={customIcon} className="marker-icon">
                  <Popup>
                    <strong>Unity Builders Lanka</strong>
                    <br />
                    NO:72, Dandugama, Ja-Ela, Sri Lanka
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <a href="https://maps.app.goo.gl/UBE3o57o6nuH5N4v7" className="btn btn-primary mt-4"><b>Direction</b></a>
          </div>
        </div>
      </div>
    </div>
  );
};
