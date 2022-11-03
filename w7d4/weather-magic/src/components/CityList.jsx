import CityListItem from "./CityListItem";

export default function CityList(props) {
  const { previousCities, updateCityAndFetchWeather } = props;

  const parsedCities =
    Array.isArray(previousCities) &&
    previousCities.map((city) => (
      <CityListItem
        key={city}
        city={city}
        onClick={() => updateCityAndFetchWeather(city)}
      />
    ));

  return (
    <section>
      <h1>Previously searched cities:</h1>
      <ul>{parsedCities}</ul>
    </section>
  );
}
