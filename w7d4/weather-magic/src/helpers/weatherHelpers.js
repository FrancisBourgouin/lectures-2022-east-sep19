import axios from "axios";

export const fetchWeather = (cityName) => {
  const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

  return axios.get(url).then((res) => res.data);
};

export const fetchWeatherByCoords = (lat, lon) => {
  const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

  return axios.get(url).then((res) => res.data);
};
