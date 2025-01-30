import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="accusim-header">
      {/* Top Header */}
      <div className="top-bar">
        <div className="site-title">Bank of AccuSim</div>
        <nav className="main-nav">
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          <NavLink to="/banking" activeClassName="active">Banking</NavLink>
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
      </div>

      {/* Subheader */}
      <div className="subheader">
        <ul>
          <li><NavLink to="/personal">Personal</NavLink></li>
          <li><NavLink to="/investing">Investing & Wealth Management</NavLink></li>
          <li><NavLink to="/small-business">Small Business</NavLink></li>
          <li><NavLink to="/commercial">Commercial Banking</NavLink></li>
          <li><NavLink to="/corporate">Corporate & Investment Banking</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
