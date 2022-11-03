export default function CurrentWeather(props) {
  const { currentWeatherData, currentCity } = props;

  // if (!currentWeatherData) {
  //   return <p>NO WEATHER FETCHED YET!</p>;
  // }

  const fancyTemp = Math.round(currentWeatherData.main.temp - 273.15);
  return (
    <section>
      <h1>Current weather for {currentCity}</h1>
      <p>{fancyTemp}°C</p>
      <p>{currentWeatherData.weather[0].description}</p>
    </section>
  );
}
