import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = "acf4f9701d8363a6ed361252f2b74e65";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${updateCity}&appid=${api}&units=imperial`;
    axios.get(weatherUrl).then(showTemperature);
  }

  if (temperature === null) {
    return (
      <div className="ContainerSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <small>please enter a city</small>
      </div>
    );
  } else {
    return (
      <div className="ContainerResults">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <div className="Weather">
          <h3> 👋 {city}! </h3>
          <div>
            <ul>
              <li>Temperature: {temperature}°F</li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} mph</li>
              <li>
                `https://openweathermap.org/img/wn/
                {response.data.weather[0].icon}@2x.png`
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
