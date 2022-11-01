import { storiesOf } from "@storybook/react";
import PlantListItem from "../components/PlantListItem";

const goodPlant = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-10-31",
  wateringInterval: 7,
};
const sadPlant = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-10-20",
  wateringInterval: 7,
};

storiesOf("PlantList Item", module)
  .add("Plant with good watering", () => <PlantListItem {...goodPlant} />)
  .add("Plant with bad watering", () => <PlantListItem {...sadPlant} />);
