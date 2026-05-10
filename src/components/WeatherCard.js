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
        try{
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=886238d787c0396510d72c2c7da4fbb2`);
            setWeather(response.data);
          }
          catch(error){
            console.log(error);
          }
        };
  const handleClick = () => {
    fetchweather();
    // Handle weather fetching logic here
  };

      return (
    
    <div className="weather">
      {/* <h2>Weather Card</h2>
      <p>Current Temperature: 72°F</p>
      <p>Conditions: Sunny</p> */}
      <input type="text" placeholder="Enter city name" value={city} onChange={handleCityChange} />
   <button onClick={handleClick}>Get Weather</button>
   {weather && (
     <div>
       <h2>{weather.name}</h2>
       <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
       <p>Conditions: {weather.weather[0].description}</p>
     </div>
   )}
    </div>
  );
}
