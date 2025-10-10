import { useEffect, useState } from "react";
import axios from "axios";

const InteriorTemplate = ({ index = 0 }) => {
  const [Interior, setInterior] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [loading, setLoading] = useState(true);

  // Fetch templates from backend
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/interior/getAll`);
      setInterior(res.data);
    } catch (err) {
      console.error("Error fetching interior designs", err);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);


  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Interior.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Interior.length - 1 : prev - 1
    );
  };

  if (loading) return <p className="text-center">Loading templates...</p>;
  if (!Interior.length) return <p className="text-center">No templates found.</p>;

  const currentTemplate = Interior[currentIndex];
  const frontImage = currentTemplate.urls[0];
  const interiorImages = currentTemplate.urls.slice(1);

  return (
    <div className="container sm:p-4 rounded-2xl bg-transparent my-3">
      <h2 className="text-xl fw-bold mb-3 text-center border py-2 bg-secondary">{currentTemplate.name}</h2>

      {/* Template Details */}
      <div className="text-center mb-4">
        <p className="mb-1"><strong>Price:</strong> {currentTemplate.price}</p>
        <p className="mb-1">
          <strong>Bedrooms:</strong> {currentTemplate.bedrooms} |{" "}
          <strong>Baths:</strong> {currentTemplate.baths}
        </p>
      </div>

      {/* Images */}
      <div className="row align-items-start g-3">
        <div className="col-12 col-sm-6 text-center">
          <img
            src={frontImage}
            alt={`${currentTemplate.name} Front View`}
            className="img-fluid rounded shadow mb-3"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-sm-6">
          <div className="row g-3">
            {interiorImages.map((img, idx) => (
              <div key={idx} className="col-6 text-center">
                <img
                  src={img}
                  alt={`${currentTemplate.name} Interior ${idx + 1}`}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "190px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
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
