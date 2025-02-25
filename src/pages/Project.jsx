import React from "react";
import { Heading } from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../assest/styles/projects.css"; // Custom styles
import projectData from "../data/projectData"; // Project data

export const Project = () => {
  return (
    <section className="projects-section py-5">
      <Heading title="Ongoing Projects" />
      <div className="container">  

        {/* Bootstrap Grid */}
        <div className="row g-4">
          {projectData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="project-box">
                <div className="img-wrapper">
                  <img src={item.image} alt={item.location} className="img-fluid project-img" />
                  <div className="overlay">
                    <h3>{item.location}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Contact Button */}
        <div className="text-center mt-4">
          <a href="#contact" className="project-btn">Contact Us</a>
        </div>

      </div>
    </section>
  );
};
