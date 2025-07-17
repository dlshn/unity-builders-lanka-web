import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";

Modal.setAppElement("#root");

export const Packages = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPackage(null);
  };

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/packages/getAll`);
        setPackageData(res.data);
      } catch (error) {
        console.error("Failed to load packages", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <section className="packages">
      <Heading title="House Packages" data-aos="fade-down" />
      <h6 className="text-light text-center mx-4 mb-4">These designs are fully customizable to meet your specific needs.</h6>
      <div className="container">
        <div className="content grid3">
          {loading ? (
            <p className="text-center">Loading packages...</p>
          ) : (
            packageData.map((pkg, index) => (
              <div className="box" data-aos="zoom-in" key={pkg._id}>
                <div className="img">
                  <img src={pkg.urls[0]} alt={pkg.title} />
                </div>
                <div className="text">
                  <h3>{pkg.title}</h3>
                  <p><b>Bathrooms:</b>{pkg.bathrooms_first_floor+pkg.bathrooms_ground_floor+pkg.bathrooms_second_floor}</p>
                  <p><b>Bedrooms:</b>{pkg.bedrooms_first_floor+pkg.bedrooms_ground_floor+pkg.bedrooms_second_floor}</p>
                  <h4 className="price">Rs.{pkg.price} lacks</h4>
                  <button className="package-btn" onClick={() => openModal(pkg)}>
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Package Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedPackage && (
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2><b>-{selectedPackage.title}-</b></h2>
            <p>
              <strong>Ground Floor:</strong> Bedrooms - {selectedPackage.bedrooms_ground_floor} | Bathrooms - {selectedPackage.bathrooms_ground_floor}
              <br />
              {(selectedPackage.bedrooms_first_floor || selectedPackage.bathrooms_first_floor) &&
                (
                  <>
                  <strong>First Floor:</strong> Bedrooms - {selectedPackage.bedrooms_first_floor} | Bathrooms - {selectedPackage.bathrooms_first_floor}
                  <br />
                  </>
                )
              }
              
              {(selectedPackage.bathrooms_second_floor || selectedPackage.bedrooms_second_floor)  &&
              (
                <>
                <strong>Second Floor:</strong> Bedrooms - {selectedPackage.bedrooms_second_floor} | Bathrooms - {selectedPackage.bathrooms_second_floor}<br />
                </>
                
              )}
              
              <strong>Square Feets:</strong> {selectedPackage.Square_feets}
            </p>
            <p>{selectedPackage.description}</p>
            <h4 className="price">Rs.{selectedPackage.price} lacks</h4>
            <div className="more-images">
              {selectedPackage.urls.map((img, i) => (
                <img key={i} src={img} alt={`Package ${i + 1}`} />
              ))}
            </div>
            <Link to="/contact" className="modal-btn">Contact Us</Link>
          </div>
        )}
      </Modal>
    </section>
  );
};
