import PlantListItem from "./PlantListItem";

// PlantList (state: no, props: listOfPlants[])
export default function PlantList(props) {
  const { listOfPlants, updateWateredDate } = props;
  const isAnArray = Array.isArray(listOfPlants);

  const parsedPlants =
    isAnArray &&
    listOfPlants.map((plant) => (
      <PlantListItem updateWateredDate={updateWateredDate} key={plant.id} {...plant} />
    ));

  return (
    <section>
      <h1>List of plants</h1>
      {!isAnArray && <p>Hey you forgot the plants!</p>}
      {parsedPlants}
    </section>
  );
}
