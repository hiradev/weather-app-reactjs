import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
  const [city, setCity] = useState({
    latitude: "6.927079",
    longitude: "79.861244"
  });

  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);

  const apiKey = '81d17aacfa5b19f113bb55fb237d4f8e';

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=hourly,minutely&units=metric&lang=tr&appid=${apiKey}`
    ).then(({ data }) => {
      setDaily(data.daily);
    });
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        current,
        setCurrent,
        daily,
        setDaily,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};