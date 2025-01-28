import React from "react";
import "./BankingPage.css";

const BankingPage = () => {
  return (
    <div className="banking-page">
      <div className="banking-panel">
        <h2>Bank of AccuSim</h2>
        <ul>
          <li>Personal</li>
          <li>Investing & Wealth Management</li>
          <li>Small Business</li>
          <li>Commercial Banking</li>
          <li>Corporate & Investment Banking</li>
        </ul>
      </div>
      <div className="login-section">
        <h2>Good Afternoon</h2>
        <p>Sign on to manage your accounts.</p>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
          <small style={{ float: "right", color: "#004d00", cursor: "pointer" }}>
            Show
          </small>
        </div>
        <div className="form-group">
          <input type="checkbox" id="save-username" />
          <label htmlFor="save-username" style={{ marginLeft: "0.5rem" }}>
            Save username
          </label>
        </div>
        <button>Sign On</button>
        <button style={{ marginTop: "1rem", backgroundColor: "#ccc" }}>
          Enroll
        </button>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          <a href="#" style={{ color: "#004d00" }}>
            Forgot username or password?
          </a>
          <br />
          <a href="#" style={{ color: "#004d00" }}>
            Privacy, Cookies, and Legal
          </a>
        </p>
      </div>
      <div className="bonus-section">
        <h2>$300 Checking Bonus on Us</h2>
        <p>
          New customers open an eligible checking account with qualifying direct
          deposits.
        </p>
        <button>Get started &gt;&gt;</button>
      </div>
    </div>
  );
};

export default BankingPage;
