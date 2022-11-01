import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const plants = props.plants;
  const isPlantAnArray = Array.isArray(plants);

  // if(true && false)

  const parsedPlants =
    isPlantAnArray &&
    plants.map((plant) => (
      // <PlantListItem name={plant.name} type={plant.type} />
      <PlantListItem {...plant} key={plant.id} />
    ));

  return (
    <section>
      <h1>List of plants</h1>
      {!isPlantAnArray && <p>HEY DONT FORGET THE PLANTS</p>}
      {parsedPlants}
    </section>
  );
}
