import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [userType, setUserType] = useState("farmer"); // Default user type is farmer
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "farmer") {
      console.log("Logging in as Farmer");
    } else {
      console.log("Logging in as Financial Institution");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page">
        <h2>Login</h2>
        <div className="user-selection">
          <button
            className={`user-btn ${userType === "farmer" ? "active" : ""}`}
            onClick={() => setUserType("farmer")}
          >
            Login as Farmer
          </button>
          <button
            className={`user-btn ${userType === "institution" ? "active" : ""}`}
            onClick={() => setUserType("institution")}
          >
            Login as Financial Institution
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="login-btn">
            {userType === "farmer" ? "Login as Farmer" : "Login as Financial Institution"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
