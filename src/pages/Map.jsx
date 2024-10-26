import React from 'react';
import './Map.css'; // Optional: For styling

const Map = () => {
    return (
        <div className="map-container">
            {/* <h2 className="map-title">Our Location</h2> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6995.957594323271!2d77.1156389!3d28.750049999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0127947c9d65%3A0x12ce9ec01b812d4e!2sDelhi%20Technological%20University%2C%20Shahbad%20Daulatpur%20Village%2C%20Rohini%2C%20Delhi%2C%20110042!5e0!3m2!1sen!2sin!4v1729908716589!5m2!1sen!2sin"
                width="100%" // Set width to 100% for full-screen effect
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Delhi Technological University"
            ></iframe>
        </div>
    );
};

export default Map;
