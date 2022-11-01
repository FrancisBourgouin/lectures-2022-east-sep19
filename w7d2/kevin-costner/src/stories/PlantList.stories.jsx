import { storiesOf } from "@storybook/react";
import PlantList from "../components/PlantList";
import { plants } from "../data/plantData";

storiesOf("Plantlist", module)
  .add("with a list of plants", () => <PlantList plants={plants} />)
  .add("without a list of plants", () => <PlantList />);
