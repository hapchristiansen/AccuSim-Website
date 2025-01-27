import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Tile from "./components/Tile";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard";
import BankingPage from "./components/BankingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]); // To store user data

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Header
        backgroundColor={isLoggedIn ? "#004d00" : "#1E3A8A"}
        onLogout={isLoggedIn ? handleLogout : null}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="grid-container">
              <Tile title="Bank Account Management" imageSrc="/bank_photo.jpg" link="/banking" />
              <Tile title="Bill Payment" imageSrc="/bill_payment.jpg" link="/bill_payment" />
              <Tile title="Grocery Ordering" imageSrc="/grocery.jpg" link="/grocery" />
            </div>
          }
        />
        <Route
          path="/banking"
          element={
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <Login
                onLoginSuccess={handleLoginSuccess}
                onCreateAccountClick={() => <Navigate to="/create-account" />}
                users={users}
              />
            )
          }
        />
        <Route
          path="/create-account"
          element={
            <CreateAccount
              onAccountCreated={() => <Navigate to="/banking" />}
              users={users}
              setUsers={setUsers}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
