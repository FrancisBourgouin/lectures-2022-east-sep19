import { useState } from "react";
import { fetchWeather, fetchWeatherByCoords } from "./helpers/weatherHelpers";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";

import dummyWeatherData from "./data/weatherData";
import "./App.css";
import { useEffect } from "react";

function App() {
  // currentCity => App (YES)
  // previousCities => App (YES)
  // currentWeatherData => App? (MAYBE)
  const [count, setCount] = useState(0);
  const [currentCity, setCurrentCity] = useState("");
  const [previousCities, setPreviousCities] = useState([]);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  // setTimeout(() => {
  //   setCount(count + 1);
  //   console.log(count);
  // }, 500);

  const updateCityAndFetchWeather = (cityName) => {
    setCurrentCity(cityName);

    fetchWeather(cityName)
      .then((data) => setCurrentWeatherData(data))
      .then(() => {
        if (!previousCities.includes(cityName)) {
          setPreviousCities([cityName, ...previousCities]);
        }
      })
      .catch(() => setCurrentWeatherData(null));
  };

  useEffect(() => {
    const report = (event) => console.log(event.clientX, event.clientY);
    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords;
      fetchWeatherByCoords(latitude, longitude).then((data) => {
        setCurrentWeatherData(data);
        setCurrentCity(data.name);
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={updateCityAndFetchWeather} />
        <CityList
          previousCities={previousCities}
          updateCityAndFetchWeather={updateCityAndFetchWeather}
        />
        {currentWeatherData && (
          <CurrentWeather
            currentWeatherData={currentWeatherData}
            currentCity={currentCity}
          />
        )}
      </main>
    </div>
  );
}

export default App;
