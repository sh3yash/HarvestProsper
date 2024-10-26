import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resources-page">
            <h1 className="resources-heading">Resources for Farmers</h1>
            <div className="resources-container">
                <div className="resources-list">
                    <div className="resource-card">
                        <h2 className="resource-title">Agricultural Loans</h2>
                        <p className="resource-description">
                            Find the best agricultural loan options tailored to your needs. 
                            Our financial partners offer competitive rates and flexible repayment terms 
                            to help you invest in your farm and maximize yield.
                        </p>
                        <a className="resource-link" href="#">Learn More</a>
                    </div>
                    <div className="resource-card">
                        <h2 className="resource-title">Market Insights</h2>
                        <p className="resource-description">
                            Get the latest market trends and insights for better decision-making. 
                            Our reports include pricing forecasts, supply chain updates, and 
                            expert analysis to keep you informed.
                        </p>
                        <a className="resource-link" href="#">Learn More</a>
                    </div>
                    <div className="resource-card">
                        <h2 className="resource-title">Weather Forecast</h2>
                        <p className="resource-description">
                            Stay updated with accurate weather forecasts for your region. 
                            Our service provides daily and weekly updates, allowing you to plan 
                            your planting and harvesting schedules effectively.
                        </p>
                        <a className="resource-link" href="#">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="success-stories">
                <h2 className="section-heading">Success Stories</h2>
                <div className="story-card">
                    <p>"Using these resources helped me double my yield! Thanks to the guidance on market trends, 
                    I was able to sell my crops at the right time and at the best price!"</p>
                </div>
                <div className="story-card">
                    <p>"The weather forecasts have been a game-changer for me. I now know when to plant and harvest, 
                    which has significantly improved my farm's productivity!"</p>
                </div>
            </div>
            <div className="faqs">
                <h2 className="section-heading">FAQs</h2>
                <div className="faq-item">
                    <p><strong>Q:</strong> How can I apply for a loan?</p>
                    <p><strong>A:</strong> Visit our loans section for detailed steps. You can also contact our support team for assistance.</p>
                </div>
                <div className="faq-item">
                    <p><strong>Q:</strong> Where can I find market insights?</p>
                    <p><strong>A:</strong> Market insights are available on our website under the "Market Insights" section.</p>
                </div>
            </div>
            <div className="external-links">
                <h2 className="section-heading">External Links</h2>
                <p>Check out these useful resources:</p>
                <ul>
                    <li><a className="resource-link" href="#">Government Schemes</a></li>
                    <li><a className="resource-link" href="#">AgriTech Innovations</a></li>
                    <li><a className="resource-link" href="#">Sustainable Farming Practices</a></li>
                </ul>
            </div>
            <div className="upcoming-events">
                <h2 className="section-heading">Upcoming Events</h2>
                <p>Join us for our upcoming agricultural fair! Connect with other farmers, learn about new technologies, 
                and participate in workshops.</p>
                <p>Date: March 15, 2025</p>
                <p>Location: City Agricultural Center</p>
            </div>
        </div>
    );
};

export default Resources;
