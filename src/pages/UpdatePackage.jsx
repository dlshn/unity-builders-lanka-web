import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assest/styles/PackageUpdate.css"; // Import the new styles

const UpdatePackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    Square_feets: "",
  });

  useEffect(() => {
    const fetchPackage = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/packages/get/${id}`);
      setForm(res.data);
    };
    fetchPackage();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("admin_token");

    try {
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/packages/update/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/Packages");
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="update-form-bg min-vh-100 py-5">
      <div className="card shadow-lg p-4 mx-auto mt-5" style={{ maxWidth: "800px", width: "80%" }}>
        <h2 className="text-center mb-4">Update House Package</h2>
        <form onSubmit={handleUpdate}>
          <div className="row g-3">
            {["title", "description", "price", "Square_feets"].map((field, idx) => (
              <div className="col-md-6" key={idx}>
                <label className="form-label text-capitalize">
                  {field.replace(/_/g, " ")}
                </label>
                <input
                  name={field}
                  type={["title", "description"].includes(field) ? "text" : "number"}
                  placeholder={field}
                  value={form[field] || ""}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <button type="submit" className="btn btn-primary px-5">
              Update Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePackage;
