// Header (state: no, props: amountOfPlants)
export default function Header(props) {
  return (
    <header>
      <h1>Super watering plant world!</h1>
      <h2>Keeping {props.amountOfPlants} plants away from dehydration</h2>
    </header>
  );
}
