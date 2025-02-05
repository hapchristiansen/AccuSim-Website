import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
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

const featureCards = [
  {
    title: "Earn a $200 cash rewards bonus",
    text: "Plus, earn unlimited 2% cash rewards on purchases with $0 annual fee. Terms apply.",
    button: "Learn more >",
  },
  {
    title: "New customer? Say hello to a $125 bonus",
    text: "Open a Clear Access Banking account, great for students & more, complete offer requirements.",
    button: "See offer details >",
  },
  {
    title: "Charting the economy’s next chapter",
    text: "Our forecasts and potential investment opportunities for the coming year.",
    button: "Get the 2025 Outlook >",
  },
];

const BankingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Ensure navigation is set up

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % adSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banking-page">
      {/* Left Column - Login Section */}
      <div className="left-column">
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
            
            {/* ✅ Updated Enroll Button to Navigate to /enroll */}
            <button 
              className="enroll-btn" 
              type="button" 
              onClick={() => navigate("/enroll")}
            >
              Enroll
            </button>

            <div className="login-links">
              <a href="#">Forgot username or password?</a>
              <a href="#">Security Center</a>
              <a href="#">Privacy, Cookies, and Legal</a>
            </div>
          </form>
        </div>
      </div>

      {/* Middle Column - Ad Slideshow */}
      <div className="middle-column">
        <div className="ad-card">
          <img src={adSlides[currentSlide].image} alt="Ad Slide" className="ad-image" />
          <div className="ad-content">
            <h2>{adSlides[currentSlide].title}</h2>
            <p>{adSlides[currentSlide].text}</p>
            <button className="ad-button">{adSlides[currentSlide].button}</button>
          </div>
        </div>

        {/* Feature Cards Below the Ad */}
        <div className="features-container">
          {featureCards.map((card, index) => (
            <div className="feature-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href="#" className="feature-link">{card.button}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingPage;
