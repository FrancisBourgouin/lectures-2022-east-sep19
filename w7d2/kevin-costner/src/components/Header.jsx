export default function Header(props) {
  return (
    <header>
      <h1>Super watering world!</h1>
      <h2>Saving {props.plantCount} plants from dehydration</h2>
    </header>
  );
}
