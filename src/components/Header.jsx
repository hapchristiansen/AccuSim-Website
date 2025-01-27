import React from "react";

function Header({ backgroundColor, onLogout }) {
  return (
    <header
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        color: "white",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Bank of AccuSim</h1>
      {onLogout && (
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
