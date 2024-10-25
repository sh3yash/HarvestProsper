import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-shadow"></div> {/* Shadow line added here */}
      <div className="footer-content">
        <p>© 2024 Agri-Finance Platform. All Rights Reserved.</p>
        <p>
          <a href="/contact-us">Contact Us</a> | 
          <a href="/privacy-policy"> Privacy Policy</a> | 
          <a href="/terms-of-service"> Terms of Service</a>
        </p>
      </div>
      <div className="footer-links">
        <h4>Follow Us:</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:info@agri-finance.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-address">
        <h4>Our Address:</h4>
        <p>123 Agri Lane, Farm City, Country</p>
        <p>Email: info@agri-finance.com</p>
      </div>
    </footer>
  );
};

export default Footer;
