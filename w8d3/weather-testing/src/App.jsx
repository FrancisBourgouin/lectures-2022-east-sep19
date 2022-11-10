import { useState, useEffect } from "react";
import useWow from "./hooks/useWow";
import axios from "axios";

import CityForm from "./components/CityForm";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";

import "./App.css";

// 09fd719b4b698ec0260e424f83378e3d
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityHistory, setCityHistory] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const { sayWow } = useWow();

  const fetchWeatherAPIByCoords = (lat, lon) => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

    return axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        const weatherObj = {
          temperature: Math.round(data.main.temp - 273.15),
          conditions: data.weather[0].description,
          city: data.name,
        };
        return weatherObj;
      })
      .then((data) => {
        setCurrentCity(data.city);
        setWeatherData(data);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => fetchWeatherAPIByCoords(coords.latitude, coords.longitude),
      () => console.log("no permission")
    );
  }, []);

  const fetchWeatherAPI = (cityName) => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

    return axios.get(url).then((res) => {
      const weatherObj = {
        temperature: Math.round(res.data.main.temp - 273.15),
        conditions: res.data.weather[0].description,
      };
      return weatherObj;
    });
  };

  const weatherSubmit = (formData) => {
    const { city } = formData;
    fetchWeatherAPI(city)
      .then((data) => {
        setCurrentCity(city);
        setWeatherData(data);
        !cityHistory.includes(city) && setCityHistory([...cityHistory, city]);
        sayWow();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchWeather = (city) => {
    fetchWeatherAPI(city)
      .then((data) => {
        setCurrentCity(city);
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Super weather YEAH! ⛅🌪️🌩️</h1>
        {/* <input type="text" placeholder="WHAT'S YOUR NAME !!!????" /> */}
      </header>
      <CityForm onSubmit={weatherSubmit} />
      <CityList cities={cityHistory} fetchWeather={fetchWeather} />
      {currentCity && <CurrentWeather city={currentCity} {...weatherData} />}
    </div>
  );
}

export default App;
