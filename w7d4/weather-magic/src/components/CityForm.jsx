import { useState } from "react";

export default function CityForm(props) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length < 60) {
      setCity(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(city);
    setCity("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
      />
      <button>Fetch weather!</button>
    </form>
  );
}
