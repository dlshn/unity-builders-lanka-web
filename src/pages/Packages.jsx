import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import packageData from "../data/packageData";

Modal.setAppElement("#root"); // Required for accessibility 

export const Packages = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section className="packages">
      <Heading title="House Packages" data-aos="fade-down"/>
      <h6 className="text-light text-center mx-4 mb-4">These designs are fully customizable to meet your specific needs.</h6>
      <div className="container">
        <div className="content grid3">
          {packageData.map((pkg, index) => (
            <div className="box" data-aos="flip-left" key={pkg.details}>
              <div className="img" data-aos="fade-up">
                <img src={pkg.image} alt={pkg.title+" Professional House Design by Unity Builders Lanka"} data-aos="fade-down" />
              </div>
              <div className="text">
                <h3 data-aos="fade-right">{pkg.title}</h3>
                <p data-aos="fade-up-right"><b>{pkg.description}</b></p>
                <h4 className="price" data-aos="fade-left">Rs.{pkg.price} lacks</h4>
                {/* Temporary */}
                <h6 data-aos="fade-right"><u>*This price is valid only until March 31st.</u></h6>
                {/* Temporary */}
                <button className="package-btn" data-aos="zoom-in" onClick={() => openModal(pkg)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Showing More Details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Package Details"
        className="modal"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={true} // Allow closing by clicking outside
        
      >

        {selectedPackage && (
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal} aria-label="Close Modal">
              X
            </button>
            <h2><b>-{selectedPackage.title}-</b></h2>
            <p>
              <strong>Ground Floor:</strong> Bedrooms-<b>{selectedPackage.details.ground.Bedroom}</b> | Bathrooms-<b>{selectedPackage.details.ground.Bathroom}</b>
            <br />
              <strong>First Floor:</strong> Bedrooms-<b>{selectedPackage.details.first.Bedroom}</b> | Bathrooms-<b>{selectedPackage.details.first.Bathroom}</b>
            
              {selectedPackage.details.second.Bedroom && (
                <>
                <br />
                <strong>Second Floor:</strong> Bedrooms-{selectedPackage.details.second.Bedroom}, Bathrooms-{selectedPackage.details.second.Bathroom}
                </>
              )}
            <br />
              <strong>Square feets:</strong> <b>{selectedPackage.details.totalArea}</b> sqrfts
            </p>
            <h6>{selectedPackage.extraDetails}</h6>
            <h4 className="price">Rs.{selectedPackage.price} lacks</h4>
            <p><u>(The total amount can be paid in three installments.)</u></p>
            
            <div className="more-images">
              {selectedPackage.moreImages && selectedPackage.moreImages.map((img, index) => (
                <img key={index} src={img} alt={`Professional House Design by Unity Builders Lanka for ${selectedPackage.title}`} />
              ))}
            </div>
            <h6 className="px-2 pt-2">
            Contact us to build this house on your land in as little as 6 months.
            These designs can be customized to fit your specific needs.
            </h6>
            <Link to="/contact" className="modal-btn">Contact Us</Link>
          </div>
        )}
      </Modal>
    </section>
  );
};
