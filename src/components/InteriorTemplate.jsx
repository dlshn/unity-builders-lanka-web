import { useEffect, useState } from "react";
import axios from "axios";
import "../assest/styles/InteriorTemplate.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InteriorTemplate = ({ index = 0 }) => {
  const [interior, setInterior] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [loading, setLoading] = useState(true);

  // Fetch templates from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/interior/getAll`
        );
        setInterior(res.data);
        console.log("Fetched interiors:", res.data);
      } catch (err) {
        console.error("Error fetching interior designs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % interior.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? interior.length - 1 : prev - 1
    );
  };

  // ✅ Show spinner while loading
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // ✅ Show message if no data
  if (!interior.length) {
    return <p className="text-center text-white">No interior designs found.</p>;
  }

  // ✅ Safe data access after loading
  const currentTemplate = interior[currentIndex];
  const frontImage = currentTemplate?.urls?.[0] || "";
  const top4Images = currentTemplate?.urls?.slice(1, 5) || [];
  const otherImages = currentTemplate?.urls?.slice(5) || [];

  return (
    <div className="container sm:p-4 rounded-2xl bg-transparent my-3">
      <h2 className="text-xl fw-bold mb-3 text-center border py-2 bg-secondary">
        {currentTemplate.name}
      </h2>

      {/* Template Details */}
      <div className="mb-4 d-flex flex-column flex-sm-row align-items-center justify-content-center mx-auto gap-2">
        <h2 className="mb-1 border py-2 w-100 w-sm-50 subHeader">
          <strong>{currentTemplate.price}</strong> lacks
        </h2>
        <h2 className="mb-1 border py-2 w-100 w-sm-50 subHeader">
          <strong>Bedrooms:</strong> {currentTemplate.bedrooms} |{" "}
          <strong>Baths:</strong> {currentTemplate.baths}
        </h2>
      </div>

      {/* Images */}
      <div className="row align-items-center justify-content-center g-3">
        <div className="col-12 col-sm-6 text-center align-items-center justify-content-center">
          <img
            src={frontImage}
            alt={`${currentTemplate.name} Front View`}
            className="img-fluid shadow border border-3 front-image"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-12 col-sm-6 text-center px-3 px-sm-0">
          <div className="row g-3 mb-3">
            {top4Images.slice(0, 2).map((img, idx) => (
              <div key={idx} className="col-12 col-sm-6">
                <img
                  src={img}
                  alt={`${currentTemplate.name} Interior ${idx + 1}`}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "190px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <div className="row g-3 mb-0">
            {top4Images.slice(2, 4).map((img, idx) => (
              <div key={idx} className="col-12 col-sm-6">
                <img
                  src={img}
                  alt={`${currentTemplate.name} Interior ${idx + 3}`}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "190px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="row mb-3 g-3 mt-0 px-3 px-sm-0">
          {otherImages.map((img, idx) => (
            <div key={idx} className="col-12 col-sm-3 text-center px-0 px-sm-2">
              <img
                src={img}
                alt={`${currentTemplate.name} Interior ${idx + 5}`}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "190px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="d-flex justify-content-between mt-4">
        <button onClick={handlePrev} className="btn btn-dark px-4">
          Prev
        </button>
        <button onClick={handleNext} className="btn btn-primary px-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default InteriorTemplate;
