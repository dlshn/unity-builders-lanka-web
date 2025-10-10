import React, { useState } from "react";
import axios from "axios";
import "../../assest/styles/PackageAdd.css"; // For custom gradient background

const PackageAdd = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    Square_feets: "",
    bedrooms_ground_floor: "",
    bedrooms_first_floor: "",
    bedrooms_second_floor: "",
    bathrooms_ground_floor: "",
    bathrooms_first_floor: "",
    bathrooms_second_floor: "",
    
    urls: [],
  });

  const [images, setImages] = useState([null, null, null, null]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    data.append("upload_preset", "ept8zpxj");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dh52yqjyq/image/upload",
      data
    );
    return res.data.secure_url;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  setLoading(true);

  try {
    const imageUrls = [];
    for (let img of images) {
      if (!img) throw new Error("All 4 images are required.");
      const url = await uploadImage(img);
      imageUrls.push(url);
    }

    // Convert numeric fields explicitly
    const payload = {
      ...form,
      price: Number(form.price),
      Square_feets: Number(form.Square_feets),
      bedrooms_ground_floor: Number(form.bedrooms_ground_floor),
      bedrooms_first_floor: Number(form.bedrooms_first_floor),
      bedrooms_second_floor: Number(form.bedrooms_second_floor),
      bathrooms_ground_floor: Number(form.bathrooms_ground_floor),
      bathrooms_first_floor: Number(form.bathrooms_first_floor),
      bathrooms_second_floor: Number(form.bathrooms_second_floor),
      urls: imageUrls,
    };

    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/packages/create`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`
        }
      }
    );

    setMessage(res.data.message || "Package added successfully!");
    setForm({
      title: "",
      description: "",
      price: "",
      Square_feets: "",
      bedrooms_ground_floor: "",
      bedrooms_first_floor: "",
      bedrooms_second_floor: "",
      bathrooms_ground_floor: "",
      bathrooms_first_floor: "",
      bathrooms_second_floor: "",
      urls: [],
    });
    setImages([null, null, null, null]);
  } catch (err) {
    console.error(err);
    setMessage("Failed to post package.");
  }

  setLoading(false);
};


  return (
    <div className="package-form-bg min-vh-100 py-5 ">
      <div className="card shadow-lg p-4 mx-auto mt-5" style={{ maxWidth: "800px", width: "80%" }}>
        <h2 className="text-center mb-4">Add New House Package</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {[
              "title",
              "description",
              "price",
              "Square_feets",
              "bedrooms_ground_floor",
              "bathrooms_ground_floor",
              "bedrooms_first_floor",
              "bathrooms_first_floor",
              "bedrooms_second_floor",
              "bathrooms_second_floor"
              
            ].map((field, idx) => (
              <div className="col-md-6" key={idx}>
                <label className="form-label text-capitalize">
                  {field.replace(/_/g, " ")} {["title", "description", "price", "Square_feets"].includes(field) && "*"}
                </label>

                <input
                  name={field}
                  type={["title", "description"].includes(field) ? "text" : "number"}
                  placeholder={field.replace(/\*/g, " ")}
                  value={form[field] || ""}
                  onChange={handleChange}
                  required={
                    field === "title" ||
                    field === "description" ||
                    field === "price" ||
                    field === "Square_feets"
                  }
                  className="form-control"
                />
              </div>
            ))}

            <div className="col-12">
              <hr />
              <h5>Upload Images (4)</h5>
            </div>
            <small className="text-danger">*The first image must be the main image</small>
            {images.map((img, i) => (
              <div className="col-md-6" key={i}>
                <label className="form-label">Image {i + 1}</label>
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
                    className="img-thumbnail mt-2"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <button type="submit" disabled={loading} className="btn btn-primary px-5">
              {loading ? "Posting..." : "Post Package"}
            </button>
          </div>

          {message && (
            <div className="alert alert-info mt-3 text-center" role="alert">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PackageAdd;
