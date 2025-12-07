import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import "../assest/styles/Package.css";

Modal.setAppElement("#root");


export const Packages = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);


  const token = localStorage.getItem("admin_token");
  const navigate = useNavigate();

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

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPackage(null);
  };

  const handleDeleteClick = async (pkgId) => {
  const confirm = window.confirm("Are you sure you want to delete this package?");
  if (!confirm) return;

  try {
    await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/packages/delete/${pkgId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Update local state
    setPackageData((prev) => prev.filter((pkg) => pkg._id !== pkgId));
  } catch (err) {
    console.error("Delete failed", err);
    alert("Failed to delete the package.");
  }
};

  const handleUpdate = (pkg) => {
    navigate(`/update-package/${pkg._id}`);
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <section className="packages">
        <Heading title="House Packages" data-aos="fade-down" />
        <h6 className="text-light text-center mx-4 mb-4">
          These designs are fully customizable to meet your specific needs.
        </h6>
        {!packageData.length && !loading ? (<p className="text-center text-white">No House Packages found.</p>):""}
        <div className="container">
          <div className="content grid3">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>

            ) : (
              packageData.slice(0, visibleCount).map((pkg) => (
                <div className="box" data-aos="zoom-in" key={pkg._id}>
                  <div className="img">
                    <img src={pkg.urls[0]} alt={pkg.title} />
                    <span className="special-discount-label">Special Discount</span>
                  </div>
                  <div className="text">
                    <h3>{pkg.title}</h3>
                    <p style={{ fontFamily: "Merriweather, serif", color:"#001c3fff" }}>{pkg.description}</p>
                    <h4 className="price">Rs. {pkg.price} lacks</h4>
                    <div className="d-flex flex-column align-items-center gap-3 mt-3">
                      {/* View Details Button */}
                      <button className="package-btn" onClick={() => openModal(pkg)}>
                        View Details
                      </button>

                      {/* Admin Controls: Delete & Update */}
                      {token && (
                        <div className="d-flex gap-3">
                          <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(pkg._id)}>
                            Delete
                          </button>
                          <button className="btn btn-warning btn-sm" onClick={() => handleUpdate(pkg)}>
                            Update
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>
          {visibleCount < packageData.length && (
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleSeeMore}>
                See More
              </button>
            </div>
          )}

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
              <button className="close-btn" onClick={closeModal}> 
                X
              </button>
              <h2>
                <b>-{selectedPackage.title}-</b>
              </h2>
              <p>
                <strong>Ground Floor:</strong> Bedrooms - {selectedPackage.bedrooms_ground_floor} | Bathrooms -{" "}
                {selectedPackage.bathrooms_ground_floor}
                <br />
                {selectedPackage.bedrooms_first_floor || selectedPackage.bathrooms_first_floor ? (
                  <>
                    <strong>First Floor:</strong> Bedrooms - {selectedPackage.bedrooms_first_floor} | Bathrooms -{" "}
                    {selectedPackage.bathrooms_first_floor}
                    <br />
                  </>
                ) : null}
                {selectedPackage.bedrooms_second_floor || selectedPackage.bathrooms_second_floor ? (
                  <>
                    <strong>Second Floor:</strong> Bedrooms - {selectedPackage.bedrooms_second_floor} | Bathrooms -{" "}
                    {selectedPackage.bathrooms_second_floor}
                    <br />
                  </>
                ) : null}
                <strong>Square Feets:</strong> {selectedPackage.Square_feets}
              </p>
              <p style={{ fontFamily: "Merriweather, serif", color: "#003e8a" }}>{selectedPackage.description}</p>
              {/* <h4 className="price">Rs. - lacks</h4> */}
              <div className="more-images">
                {selectedPackage.urls.map((img, i) => (
                  <img key={i} src={img} alt={`Package ${i + 1}`} />
                ))}
              </div>
              <Link to="/contact" className="modal-btn">
                Contact Us
              </Link>
            </div>
          )}
        </Modal>
      </section>

      

    </>
  );
};
