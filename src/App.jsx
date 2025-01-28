import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BankingPage from "./components/BankingPage";
import HomePage from "./components/HomePage"; // Create if it doesn't exist
import AboutPage from "./components/AboutPage"; // Create if it doesn't exist
import ContactPage from "./components/ContactPage"; // Create if it doesn't exist

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/banking" element={<BankingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
