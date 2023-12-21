// About.js
import React from 'react';
import './About.css'; // Import the CSS file
import Header from './Header';
import Footer from './Footer';

const About = () => {
  // Sample member data
  const members = [
    {
      name: 'John Doe',
      role: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Doe',
      role: 'CTO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more members as needed
  ];

  return (
    <>
      <Header />
      <section className="about-container">
        <p className="mission">
          Welcome to TechBiz, a leading IT company dedicated to transforming businesses through innovative technology solutions. With a mission to drive digital excellence, we specialize in delivering cutting-edge software development, cloud services, and cybersecurity solutions. Our team of skilled professionals is committed to crafting tailored strategies that empower organizations to thrive in the digital era. At TechBiz, we pride ourselves on our commitment to quality, client satisfaction, and continuous innovation. Join us on the journey to elevate your business, embrace technological advancements, and achieve unparalleled success in the dynamic landscape of the digital world.
        </p>
        <p className="history">
          Founded in 2023, we have been dedicated to ourselves for greater good. Our team is passionate about the industry and strives to impact the way of evolving.
        </p>
      </section>

      <section className="member-cards">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default About;
