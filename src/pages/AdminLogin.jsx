import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/request-otp`, { email });
      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/verify-otp`, { email, otp });
      localStorage.setItem("admin_token", res.data.token);
      setMessage("Login successful!");
      navigate("/");

      // optionally redirect or refresh
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="py-5">
        <div className="container mt-5 p-3 bg-light" style={{ maxWidth: "400px" }}>
        <h3 className="text-center text-dark">Admin Login</h3>
        <p className="text-center text-muted">Only authorized admins can login</p>

        {step === 1 && (
            <>
            <label>Email</label>
            <input
                type="email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="btn btn-primary w-100" onClick={handleSendOtp}>
                Send OTP
            </button>
            </>
        )}

        {step === 2 && (
            <>
            <label>Enter OTP</label>
            <input
                type="text"
                className="form-control mb-3"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
            />
            <button className="btn btn-success w-100" onClick={handleVerifyOtp}>
                Verify OTP
            </button>
            </>
        )}

        {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
        </div>
  );
};

export default AdminLogin;
