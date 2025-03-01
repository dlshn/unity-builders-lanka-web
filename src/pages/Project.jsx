import React from "react";
import { Heading } from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../assest/styles/projects.css"; // Custom styles
import projectData from "../data/projectData"; // Project data

export const Project = () => {
  return (
    <section className="projects-section">
      <Heading title="Latest Projects" data-aos="fade-down" />
      <div className="container">
        {/* Bootstrap Grid */}
        <div className="row g-4">
          {projectData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="project-box" data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left"}>
                {/* Bootstrap Carousel for Multiple Images */}
                <div id={`carouselExample${item.id}`} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {/* Add Multiple Images Inside Carousel */}
                    {item.images.map((image, index) => (
                      <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <img src={image} alt={item.location} className="d-block w-100 project-img" />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${item.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${item.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="overlay">
                  <h4>{item.site}</h4>
                  <a href={item.location} type="button" class="btn btn-primary">Location</a>
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
