// Services.js
import React from 'react';
import './Services.css'; // Import the CSS file

const Services = () => {
  // Example service data
  const services = [
    {
      name: 'Basic Service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Premium Service',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    // Add more services as needed
  ];

  return (
    <section className="services-container">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button className="subscription-button">Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
