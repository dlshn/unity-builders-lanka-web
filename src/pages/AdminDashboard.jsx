import React from "react";
import { useNavigate } from "react-router-dom";
import "../assest/styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <div className="container py-5 text-center">
        <h1 className="text-white mb-5">Admin Dashboard</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="dash-card c1" onClick={() => navigate("/ProjectAdd")}>
            <div className="card-body1 d-flex align-items-center justify-content-center">
                <h5>Add Project</h5>
            </div>
            </div>
            <div className="dash-card c2" onClick={() => navigate("/AddPackage")}>
            <div className="card-body2 d-flex align-items-center justify-content-center">
                <h5>Add Package</h5>
            </div>
            </div>
            <div className="dash-card c3" onClick={() => navigate("/Project")}>
            <div className="card-body3 d-flex align-items-center justify-content-center">
                <h5>Project List</h5>
            </div>
            </div>
            <div className="dash-card c4" onClick={() => navigate("/Packages")}>
            <div className="card-body4 d-flex align-items-center justify-content-center">
                <h5>Package List</h5>
            </div>
            </div>
        </div>

        <button className="btn btn-danger mt-5" onClick={handleLogout}>
            Logout
        </button>
        </div>

    </div>
  );
};

export default AdminDashboard;
