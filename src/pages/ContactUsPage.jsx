// src/pages/ContactUsPage.js
import React, { useState } from 'react';
import './ContactUsPage.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import locationimg from '../assets/images/location.jpg';
import callimg from '../assets/images/contact.jpg';
import emailimg from '../assets/images/email.jpg';
import Map from '../pages/Map.jsx';

const ContactUs = () => {
  const [isExpanded, setIsExpanded] = useState({
    location: false,
    phone: false,
    email: false,
  });

  const handleReadMore = (section) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="contact-page-container">
      {/* Find Us Section */}
      <div className="find-us-container">
        <h2 className="section-heading">Find Us</h2>
        <div className="card-group">
          <div className="info-card">
            <img src={locationimg} alt="Location" className="card-image" />
            <FaMapMarkerAlt className="card-icon" />
            <h3 className="card-title">Our Location</h3>
            <p className="card-description">
              {isExpanded.location
                ? '1234 Farm Street, Rural City, Country. We are located in the heart of the agricultural district, accessible to all major farming regions...'
                : '1234 Farm Street, Rural City, Country.'}
            </p>
            <button className="toggle-button" onClick={() => handleReadMore('location')}>
              {isExpanded.location ? 'Show Less' : 'Read More'}
            </button>
          </div>

          <div className="info-card">
            <img src={callimg} alt="Phone" className="card-image" />
            <FaPhoneAlt className="card-icon" />
            <h3 className="card-title">Call Us</h3>
            <p className="card-description">
              {isExpanded.phone
                ? 'You can reach us at +123 456 7890 from Monday to Friday, 9 AM to 6 PM. Our customer support team is here to assist you with any queries you may have...'
                : '+123 456 7890.'}
            </p>
            <button className="toggle-button" onClick={() => handleReadMore('phone')}>
              {isExpanded.phone ? 'Show Less' : 'Read More'}
            </button>
          </div>

          <div className="info-card">
            <img src={emailimg} alt="Email" className="card-image" />
            <FaEnvelope className="card-icon" />
            <h3 className="card-title">Email Us</h3>
            <p className="card-description">
              {isExpanded.email
                ? 'Feel free to email us at contact@agrifinance.com. We respond to all emails within 24 hours. For urgent inquiries, please call our customer support...'
                : 'contact@agrifinance.com.'}
            </p>
            <button className="toggle-button" onClick={() => handleReadMore('email')}>
              {isExpanded.email ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="contact-form-container">
        <h2 className="section-heading">Get in Touch</h2>
        <form className="contact-form">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <h2 className="section-heading">Our Location on Map</h2>
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
