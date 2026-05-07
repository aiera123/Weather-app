import React from 'react'
import { useState } from 'react';
export default function WeatherCard() {
    const [city, setCity] = React.useState('');
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }
    const fetchweather = () => {
        try{
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key})
        }
        catch(error){
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
   
    </div>
  )
}
