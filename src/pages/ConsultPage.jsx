import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ConsultPage.css';
import Spline from '@splinetool/react-spline';

const ConsultPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData, startDate);
  };

  return (
    <div className="consultation-page">
      <h1>Schedule a Consultation</h1>
      <p>Book an appointment with our financial experts to discuss your farming finance needs.</p>
      
      <div className="consultation-content">
        {/* Left Section: 3D Model with Spline */}
        <div className="consultation-spline">
          <Spline scene="https://prod.spline.design/alEU9ank5gZUHys8/scene.splinecode" />
        </div>

        {/* Right Section: Form */}
        <div className="consultation-form">
          <h3>Financial Consultation</h3>
          <p>
            <span>&#10003;</span> Meet with our experienced advisors to create a customized financial plan for your farm, tailored to your specific needs and goals.
          </p>

          {/* Consultation Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Select date and time:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
                placeholderText="Select date and time"
                required
              />
            </div>

            <p>Event time zone: Asia/Shanghai GMT+08:00</p>

            <button type="submit" className="btn-book">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultPage;
