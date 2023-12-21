import React, { useEffect } from 'react';
import Weather from './Weather';

const WeatherData = () => {
  const apiKey = '7065ce21dcb465f5c959c372aa153780';
  const city = 'Colombo';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiKey, city]);

  return (
    <div>
      <Weather/>
    </div>
  );
};

export default WeatherData;
