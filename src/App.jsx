import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BankingPage from "./components/BankingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Login from "./components/Login";
import EnrollPage from "./components/EnrollPage"; // Ensure this is imported
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/banking" element={<BankingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/enroll" element={<EnrollPage />} /> {/* Ensure this route exists */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
