import React, { useState } from "react";
import Modal from "react-modal";
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
    console.log("Closing Modal");
    setModalIsOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section className="packages">
      <Heading title="House Packages" data-aos="fade-down"/>
      <div className="container">
        <div className="content grid3">
          {packageData.map((pkg, index) => (
            <div className="box" data-aos="flip-left" key={index}>
              <div className="img" data-aos="fade-up">
                <img src={pkg.image} alt={pkg.title} data-aos="fade-down" />
              </div>
              <div className="text">
                <h3 data-aos="fade-right">{pkg.title}</h3>
                <p data-aos="fade-up-right"><b>{pkg.description}</b></p>
                <h4 className="price" data-aos="fade-left">Rs.{pkg.price} lacks</h4>
                <h6 data-aos="fade-right"><u>*This price is valid only until March 31st.</u></h6>
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
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <h2><b>-{selectedPackage.title}-</b></h2>
            <p>
              <b>Ground Floor:</b> Bedrooms-{selectedPackage.details.ground.Bedroom} | Bathrooms-{selectedPackage.details.ground.Bathroom}
            <br />
              <b>First Floor:</b> Bedrooms-{selectedPackage.details.first.Bedroom} | Bathrooms-{selectedPackage.details.first.Bathroom}
            
              {selectedPackage.details.second.Bedroom && (
                <>
                <br />
                <b>Second Floor:</b> Bedrooms-{selectedPackage.details.second.Bedroom}, Bathrooms-{selectedPackage.details.second.Bathroom}
                </>
              )}
            <br />
              <b>Square feets:</b> {selectedPackage.details.totalArea} sqrfts
            <br />
              {selectedPackage.extraDetails}
            </p>
            <h4 className="price">Rs.{selectedPackage.price} lacks</h4>
            <p><u>(The total amount can be paid in three installments.)</u></p>
            
            <div className="more-images">
              {selectedPackage.moreImages && selectedPackage.moreImages.map((img, index) => (
                <img key={index} src={img} alt={`More about ${selectedPackage.title}`} />
              ))}
            </div>
            <p>Contact us to build this house on your land in as little as 6 months.</p>
            <a href="#contact" className="modal-btn">Contact Us</a>
          </div>
        )}
      </Modal>
    </section>
  );
};
