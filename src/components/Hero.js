import React, { useState, useEffect } from 'react';
import './Hero.css';
import Clock from './Clock';
import './Clock';

const images = [
  'https://wallpapercave.com/dwp1x/wp10469348.jpg',
  'https://wallpapercave.com/dwp1x/wp10469290.jpg',
  'https://wallpapercave.com/dwp1x/wp9223984.jpg',
  // Add more image URLs as needed
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically move to the next image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Hero">
      <div
        className="slideshow"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />
      <div className="content">
        <h1>To Change the CHANGE</h1>
        <p>Discover amazing things here!</p>
      </div>
    </div>
  );
};

export default Hero;
