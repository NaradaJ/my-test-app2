import './Clock.css';
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Format the time to HH:mm:ss
  const formattedTime = currentTime.toLocaleTimeString();

  // Format the date to YYYY-MM-DD
  const formattedDate = currentTime.toISOString().split('T')[0];

  return (
    <div className="clock-container">
      <div className="time">{formattedTime}</div>
      <div className="date">{formattedDate}</div>
    </div>
  );
};

export default Clock;
