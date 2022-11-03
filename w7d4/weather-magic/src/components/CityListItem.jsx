export default function CityListItem(props) {
  const { city, onClick } = props;
  return (
    <li>
      <button onClick={onClick}>{city}</button>
    </li>
  );
}
