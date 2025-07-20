import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../assest/styles/AdminLogin.css'; // For custom styles



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
      window.dispatchEvent(new Event("authChange"));
      navigate("/AdminDashboard"); // Redirect to admin dashboard

      // optionally redirect or refresh
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
        <div className="admin-login-bg">
         <div className="login-card d-flex flex-column align-items-center">
            <h2 className="text-center text-dark">- Admin Login -</h2>
            <p className="text-center text-danger">*Only authorized admins can login</p>

            {step === 1 && (
                <>
                <label className="">Email :</label>
                <input
                    type="email"
                    className="form-control mb-3"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="btn btn-primary w-100" onClick={handleSendOtp}>
                    Send OTP
                </button>
                </>
            )}
            {message && <div className="alert alert-info mt-3">{message}</div>}

            {step === 2 && (
                <>
                <label>Enter OTP :</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />
                <button className="btn btn-primary w-50" onClick={handleVerifyOtp}>
                    Verify OTP
                </button>
                </>
            )}

            
            </div>
         </div>
        );

};

export default AdminLogin;
