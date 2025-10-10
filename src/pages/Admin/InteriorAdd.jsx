import { useState } from "react";
import axios from "axios";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dh52yqjyq/image/upload";
const UPLOAD_PRESET = "ept8zpxj";

const CreateInterior = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    bedrooms: "",
    baths: "",
    properties: [] // uploaded image URLs
  });
  const [images, setImages] = useState([]); // selected files
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const uploadImages = async () => {
    const uploadedUrls = [];
    setUploading(true);

    for (let img of images) {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await axios.post(CLOUDINARY_URL, data);
        uploadedUrls.push(res.data.secure_url);
      } catch (err) {
        console.error("Cloudinary upload error:", err);
      }
    }

    setUploading(false);
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadedUrls = await uploadImages();
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/interior`, {
        ...formData,
        properties: uploadedUrls
      });

      alert("Template created successfully!");
      setFormData({
        name: "",
        price: "",
        bedrooms: "",
        baths: "",
        properties: []
      });
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Error creating template");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Create Interior Template</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Baths</label>
            <input
              type="number"
              name="baths"
              value={formData.baths}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="form-control"
          />
          {images.length > 0 && (
            <small className="text-muted">{images.length} file(s) selected</small>
          )}
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="btn btn-primary"
        >
          {uploading ? "Uploading..." : "Create Template"}
        </button>
      </form>
    </div>
  );
};

export default CreateInterior;
