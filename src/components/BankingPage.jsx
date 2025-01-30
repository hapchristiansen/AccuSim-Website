import React, { useState, useEffect } from "react";
import "../index.css";

const adSlides = [
  {
    image: "/300_Dollar_Checking.jpg",
    title: "$300 Checking Bonus on Us",
    text: "New customers open an eligible checking account with qualifying direct deposits.",
    button: "Get started >>",
  },
  {
    image: "/savings.jpg",
    title: "Earn More with a High-Yield Savings Account",
    text: "Get industry-leading rates with no hidden fees.",
    button: "Learn more >>",
  },
  {
    image: "/car_loan.jpg",
    title: "Your Dream Car is Closer Than You Think",
    text: "Auto loans with flexible terms and low interest rates.",
    button: "Apply now >>",
  },
];

const BankingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % adSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banking-page">
      {/* Login Section */}
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Good Afternoon</h2>
          <p className="login-subtitle">Sign on to manage your accounts.</p>
          <form>
            <div className="input-container">
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-container password-container">
              <label>Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
              />
              <span 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="save-username" />
              <label htmlFor="save-username">Save username</label>
            </div>
            <button className="sign-on-btn" type="submit">Sign On</button>
            <button className="enroll-btn" type="button" disabled>Enroll</button>
            <div className="login-links">
              <a href="#">Forgot username or password?</a>
              <a href="#">Security Center</a>
              <a href="#">Privacy, Cookies, and Legal</a>
            </div>
          </form>
        </div>
      </div>

      {/* Advertisement Section - Slideshow */}
      <div className="ad-section">
        <div className="ad-card">
          <img src={adSlides[currentSlide].image} alt="Ad Slide" className="ad-image" />
          <div className="ad-content">
            <h2>{adSlides[currentSlide].title}</h2>
            <p>{adSlides[currentSlide].text}</p>
            <button className="ad-button">{adSlides[currentSlide].button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingPage;
