import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiLocationMarker } from "react-icons/hi";
import "../assest/styles/projects.css";
import axios from "axios";

export const Project = () => {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);


  // Fetch data from MongoDB via your backend API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/projects/getAll`);
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects", err);
      }
    };

    fetchProjects();
  }, []);

  const deleteProject = async (projectId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("admin_token");

    if (!token) {
      alert("Unauthorized. Please log in.");
      return;
    }

    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/projects/delete/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProjects((prev) => prev.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error("❌ Failed to delete project:", error);
      alert("Failed to delete the project. Please try again.");
    }
  };

  const handleSeeMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };




  return (
    <section className="projects-section">
      <Heading title="Latest Projects" data-aos="fade-down" />
      <div className="container">
        <div className="row g-4 d-flex align-items-center justify-content-between">
          {projects.slice(0, visibleCount).map((item) => (
            <div key={item._id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="project-outer d-flex flex-column align-items-center">
                <div className="project-box" >
                  <div id={`carouselExample${item._id}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {item.urls.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                          <img src={image} alt={item.location} className="d-block w-100 project-img" />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${item._id}`} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${item._id}`} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row">
                    <HiLocationMarker className="text-dark m-auto fs-3" />
                    <h4 className="location-text mt-2 mx-2">{item.title}</h4>
                </div>
                <div class="d-flex justify-content-between gap-3 align-items-center  mx-3 mb-2" >

                  <a href={item.location} type="button" className="location-btn btn" >
                    Location
                  </a>

                  <h6 className="updated-date">
                    Last Update: {new Date(item.updatedAt).toLocaleDateString()}
                  </h6>

                </div>
                
                {localStorage.getItem("admin_token") && (
                  <button
                    onClick={() => deleteProject(item._id)}
                    className="btn btn-sm btn-danger my-2 delete-btn"
                    style={{ borderRadius: "8px", width: "100%" }}
                  >
                    Delete
                  </button>
                )}
              </div>
              

            </div>
          ))}
          {visibleCount < projects.length && (
            <div className="text-center mt-4">
              <button onClick={handleSeeMore} className="btn btn-primary">
                See More
              </button>
            </div>
          )}

        </div>

        <div className="text-center mt-4">
          <Link to="/contact" className="project-btn">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};
