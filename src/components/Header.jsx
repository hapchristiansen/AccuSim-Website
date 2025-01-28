import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="title">Bank of AccuSim</div>
      <nav className="nav-links">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/banking" activeClassName="active">
          Banking
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
