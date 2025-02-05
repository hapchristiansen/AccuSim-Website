import React from "react";
import EnrollForm from "./EnrollForm";
import "../index.css";

const EnrollPage = () => {
  return (
    <div className="enroll-page-container">
      <h2>Online Account Creation Portal</h2>
      <p>Securely create your account to access banking features.</p>
      <EnrollForm />
    </div>
  );
};

export default EnrollPage;
