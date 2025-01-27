import React, { useState } from "react";

function BankingPage({ onLoginSuccess, onCreateAccountClick, users }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      onLoginSuccess();
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="banking-page">
      <div className="login-card">
        <h2>Good afternoon</h2>
        <p>Sign on to manage your accounts.</p>
        <form onSubmit={handleLogin}>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>
          <div className="checkbox-container">
            <input type="checkbox" id="save-username" />
            <label htmlFor="save-username">Save username</label>
          </div>
          <button type="submit" className="sign-on">Sign On</button>
        </form>
        <a href="#" onClick={onCreateAccountClick}>
          Create an Account
        </a>
        <a href="#">Forgot username or password?</a>
      </div>
    </div>
  );
}

export default BankingPage;
