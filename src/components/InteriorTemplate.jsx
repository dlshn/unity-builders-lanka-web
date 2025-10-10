import { useEffect, useState } from "react";
import axios from "axios";

const InteriorTemplate = ({ index = 0 }) => {
  const [templates, setTemplates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [loading, setLoading] = useState(true);

  // Fetch templates from backend
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/templates"); // 👈 update with your API URL
        setTemplates(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching templates:", err);
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? templates.length - 1 : prev - 1
    );
  };

  if (loading) return <p className="text-center">Loading templates...</p>;
  if (!templates.length) return <p className="text-center">No templates found.</p>;

  const currentTemplate = templates[currentIndex];

  return (
    <div className="container p-4 rounded-2xl shadow-lg bg-white my-4">
      <h2 className="text-xl fw-bold mb-3 text-center">{currentTemplate.name}</h2>

      {/* Template Details */}
      <div className="text-center mb-4">
        <p className="mb-1"><strong>Price:</strong> {currentTemplate.price}</p>
        <p className="mb-1">
          <strong>Bedrooms:</strong> {currentTemplate.bedrooms} |{" "}
          <strong>Baths:</strong> {currentTemplate.baths}
        </p>
      </div>

      {/* Images */}
      <div className="row g-3">
        {currentTemplate.properties.map((img, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4">
            <img
              src={img}
              alt={currentTemplate.name}
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
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
