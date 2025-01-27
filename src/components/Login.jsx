import React, { useState } from "react";

function Login({ onLoginSuccess, onCreateAccountClick, users }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="container">
      <h1>Bank Login</h1>
      <form onSubmit={handleLogin} style={{ marginBottom: "1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#1E3A8A",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "0.5rem",
          }}
        >
          Login
        </button>
      </form>
      <button
        onClick={onCreateAccountClick}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#E5E7EB",
          border: "1px solid #D1D5DB",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Create an Account
      </button>
    </div>
  );
}

export default Login;
