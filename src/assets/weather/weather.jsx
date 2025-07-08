import React, { useEffect, useState } from "react";
import "./weather.css";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const apiKey = "67de01853c23b58343ed428ad30ca54f";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("No server response!");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log("Error on reciving weather data");
      }
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (geoError) => {
          console.log("Geolocation Error", geoError);
          setError("Permission denied!");
        }
      );
    } else {
      setError("Geolocation not valid");
    }
  }, []);
  if (error) return <div>{error}</div>;
  if (!weather)
    return <div style={{ color: "white" }}> 🧪 Weather is loading...</div>;
  return (
    <div
      className="weather-div"
      style={{
        color: "white",
        margin: "20px",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>🧪 Weather in {weather.name}</h3>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
}
export default WeatherWidget;
