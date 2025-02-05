import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    ssn_last4: "",
    date_of_birth: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  // Password validation
  const passwordRequirements = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*]/.test(formData.password),
  };

  const allPasswordValid = Object.values(passwordRequirements).every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!allPasswordValid) {
      setMessage("Password does not meet the requirements.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/enroll", {
        ...formData,
        phone: formData.phone.replace(/\D/g, ""), // Ensure phone is cleaned
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Enrollment error:", error);
      setMessage("Enrollment failed. Please try again.");
    }
  };

  return (
    <div className="enroll-container">
      <h2>Online Account Creation Portal</h2>
      <p>Securely create your account to access banking features.</p>

      <form onSubmit={handleSubmit} className="enroll-form">
        <label>Username *</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number *</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter digits only" />

        <label>Password *</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <ul className="password-requirements">
          <li style={{ color: passwordRequirements.length ? "green" : "red" }}>At least 8 characters</li>
          <li style={{ color: passwordRequirements.uppercase ? "green" : "red" }}>At least one uppercase letter</li>
          <li style={{ color: passwordRequirements.lowercase ? "green" : "red" }}>At least one lowercase letter</li>
          <li style={{ color: passwordRequirements.number ? "green" : "red" }}>At least one number</li>
          <li style={{ color: passwordRequirements.special ? "green" : "red" }}>At least one special character (!@#$%^&*)</li>
        </ul>

        <label>Confirm Password *</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        {formData.password && formData.confirmPassword && (
          <p style={{ color: formData.password === formData.confirmPassword ? "green" : "red" }}>
            {formData.password === formData.confirmPassword ? "Passwords match" : "Passwords do not match"}
          </p>
        )}

        <label>Last 4 Digits of SSN *</label>
        <input type="text" name="ssn_last4" value={formData.ssn_last4} onChange={handleChange} required maxLength="4" />

        <label>Date of Birth *</label>
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />

        <label>Address *</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <button type="submit">Enroll</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default EnrollForm;
