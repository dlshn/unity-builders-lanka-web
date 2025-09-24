import { useState } from "react";

const templates = [
  {
    id: 0,
    title: "Modern Living Room",
    images: [
      "https://res.cloudinary.com/dh52yqjyq/image/upload/v1753725941/hg0sngkynwxfsqpzqzaw.jpg",
      "https://res.cloudinary.com/dh52yqjyq/image/upload/v1753725942/lml2270i2tenzqyqef7s.jpg",
      "https://res.cloudinary.com/dh52yqjyq/image/upload/v1753725795/c5dakawpeemk6wduv3fq.jpg",
      "https://res.cloudinary.com/dh52yqjyq/image/upload/v1753725679/hi6ekxcah5l6wgq255tz.jpg",
      "https://res.cloudinary.com/dh52yqjyq/image/upload/v1753725449/n5jzsmi2hca4iass1vvs.jpg"
    ],
  },
  {
    id: 1,
    title: "Luxury Bedroom",
    images: [
      "https://via.placeholder.com/400x250?text=Bedroom+1",
      "https://via.placeholder.com/400x250?text=Bedroom+2",
      "https://via.placeholder.com/400x250?text=Bedroom+3",
    ],
  },
  {
    id: 2,
    title: "Office Interior",
    images: [
      "https://via.placeholder.com/400x250?text=Office+1",
      "https://via.placeholder.com/400x250?text=Office+2",
    ],
  },
];

const InteriorTemplate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? templates.length - 1 : prev - 1
    );
  };

  const currentTemplate = templates[currentIndex];

  return (
    <div className="container p-4 rounded-2xl shadow-lg bg-white my-4">
      <h2 className="text-xl fw-bold mb-4 text-center">
        {currentTemplate.title}
      </h2>

      <div className="row g-3">
        {currentTemplate.images.map((img, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4">
            <img
              src={img}
              alt={currentTemplate.title}
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={handlePrev}
          className="btn btn-dark px-4"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="btn btn-primary px-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InteriorTemplate;
