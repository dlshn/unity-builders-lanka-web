// import React, { useState } from 'react';
import InteriorTemplate from '../components/InteriorTemplate';
import bgImage from '../assest/Background_images/Interior/bg1.jpg';
import { Heading } from '../components/Heading';

const Interior = () => {
  // const [loading, setLoading] = useState(true);

  return (
    <div
      className="py-5 position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

      <div className="position-relative bg-transparent py-5 d-flex flex-column justify-content-center align-items-center">
        <Heading title="Interior Designs" />
        <InteriorTemplate />
      </div>
    </div>

  );
};

export default Interior;
