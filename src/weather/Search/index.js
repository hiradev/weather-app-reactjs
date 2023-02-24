import "./index.css";
import { useState } from "react";

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const api = {
  key: "81d17aacfa5b19f113bb55fb237d4f8e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  
  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div id='search'>
          <input
            type="text"
            placeholder="Enter Latitude"
            onChange={(e) => setLat(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Longitude"
            onChange={(e) => setLon(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;