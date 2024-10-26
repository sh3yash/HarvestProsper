import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Agri-Finance Platform Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/tradingplatform">Trading Platform</Link>
        <Link to="/consultation">Apply Loans</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
