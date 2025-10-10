import React, { useState } from "react";
import axios from "axios";
import "../../assest/styles/ProjectAdd.css"; // For custom gradient background

const ProjectAdd = () => {
  const [form, setForm] = useState({ title: "", location: "", urls: [] });
  const [images, setImages] = useState([null, null, null, null]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e, index) => {
    const updated = [...images];
    updated[index] = e.target.files[0];
    setImages(updated);
  };

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ept8zpxj"); // your cloudinary preset
    const res = await axios.post("https://api.cloudinary.com/v1_1/dh52yqjyq/image/upload", data);
    return res.data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const urls = [];
      for (const img of images) {
        if (!img) throw new Error("All 4 images are required.");
        const url = await uploadImage(img);
        urls.push(url);
      }

      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/projects/create`,
        {
        title: form.title,
        location: form.location,
        urls,
      },
      {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`
          }
        }
    );

      setMessage(res.data.message || "Project added successfully!");
      setForm({ title: "", location: "", urls: [] });
      setImages([null, null, null, null]);
    } catch (error) {
      console.error(error);
      setMessage("Error uploading project.");
    }

    setLoading(false);
  };

  return (
    <div className="project-form-bg">
      <div className="card p-4 shadow" style={{ maxWidth: "700px",width:"80%", margin: "auto" }}>
        <h2 className="text-center mb-4">Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Project Name</label>
            <input
              name="title"
              placeholder="ex: project Kelaniya"
              className="form-control"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Project Location</label>
            <input
              name="location"
              placeholder="ex: https://goo.gl/maps/xyz"
              className="form-control"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label><b>Upload 4 Images</b></label><br />
            <small className="text-danger">*The first image must be the main image</small>
            <div className="row mt-2">
              {images.map((img, i) => (
                <div key={i} className="col-sm-6 col-md-3 mb-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, i)}
                    className="form-control"
                    required
                  />
                  {img && (
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${i + 1}`}
                      className="img-thumbnail mt-1"
                      style={{ height: "100px", objectFit: "cover" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Uploading..." : "Add Project"}
            </button>
          </div>

          {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default ProjectAdd;
