export default function CurrentWeather(props) {
  const { city, temperature, conditions } = props;
  return (
    <section className="CurrentWeather">
      <h1>Current weather for {city}</h1>
      <p>It is currently {temperature}C</p>
      <p>
        Conditions are <span>{conditions}</span>
      </p>
    </section>
  );
}
