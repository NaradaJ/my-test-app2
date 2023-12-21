import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
import './Weather.css';
import './WeatherData';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '7065ce21dcb465f5c959c372aa153780';
  const city = 'Colombo';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather } = weatherData;
  const temperature = main.temp - 273.15; // Convert temperature from Kelvin to Celsius

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case '01d':
        return <WiDaySunny />;
      case '02d':
        return <WiCloudy />;
      case '03d':
      case '04d':
        return <WiCloudy />;
      case '09d':
        return <WiRain />;
      case '10d':
        return <WiRain />;
      case '11d':
        return <WiThunderstorm />;
      case '13d':
        return <WiSnow />;
      default:
        return null;
    }
  };

  return (
    <div className="weather-container">
      <h2>{city} Weather</h2>
      <div>
        <strong>Temperature:</strong> {temperature.toFixed(2)}°C
      </div>
      <div>
        <strong>Weather:</strong> {weather[0].description}
      </div>
      <div>{getWeatherIcon(weather[0].icon)}</div>
    </div>
  );
};

export default Weather;
