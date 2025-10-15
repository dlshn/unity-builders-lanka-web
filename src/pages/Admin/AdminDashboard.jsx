import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assest/styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <div className="container py-5 text-center">
        <h1 className="text-black fw-bold mb-5 bg-light py-2">Admin Dashboard</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="dash-card c1" onClick={() => navigate("/ProjectAdd")}>
            <div className="card-body1 d-flex flex-column align-items-center justify-content-center">
                <h5>Add Project</h5>
                <small>(Ongoing projects update)</small>
            </div>
            </div>
            <div className="dash-card c2" onClick={() => navigate("/AddPackage")}>
            <div className="card-body2 d-flex flex-column align-items-center justify-content-center">
                <h5>Add Package</h5>
                <small>(Add Budget Houses)</small>
            </div>
            </div>
            <div className="dash-card c3" onClick={() => navigate("/InteriorAdd")}>
            <div className="card-body3 d-flex flex-column align-items-center justify-content-center">
                <h5>Add Interior</h5>
                <small>(Add Interior Designs)</small>
            </div>
            </div>

            <div className="dash-card c4" onClick={() => navigate("/Project")}>
            <div className="card-body4 d-flex align-items-center justify-content-center">
                <h5>Project Update</h5>
            </div>
            </div>
            <div className="dash-card c5" onClick={() => navigate("/Packages")}>
            <div className="card-body5 d-flex align-items-center justify-content-center">
                <h5>Package Update</h5>
            </div>
            </div>
        </div>

        
        </div>

    </div>
  );
};

export default AdminDashboard;
