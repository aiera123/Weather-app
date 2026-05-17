import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function WeatherCard() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const fetchweather = async () => {
  try {

    console.log("Fetching weather...");

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae6a406f80c093fb1a2afbd4e856a72d&units=metric`
    );

    console.log(response.data);

    setWeather(response.data);

  } catch (error) {

    console.log("ERROR:");
    console.log(error.response);

  }
};
   const handleClick = () => {
    fetchweather();
    //console.log(process.env.REACT_APP_WEATHER_API_KEY);
    // Handle weather fetching logic here
  };

      return (
    
  <div className="weather-container">

    <h1>☀️ Weather App</h1>

    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={handleCityChange}
    />

    <button onClick={handleClick}>
      🌤️ Get Weather
    </button>

    {weather && (
      <div className="weather-info">

        <h2>📍 {weather.name}</h2>

        <p>
          🌡️ Temperature:
          {" "}
          {Math.round(weather.main.temp)}°C
        </p>

        <p>
          ☁️ {weather.weather[0].description}
        </p>

      </div>
    )}

  </div>
);
}
