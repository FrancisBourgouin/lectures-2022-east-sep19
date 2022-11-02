import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import { plantListObj } from "./data/plantData";
import { useState } from "react";
// - App (state: listOfPlants, props: NEVER)
//   - Header (state: no, props: amountOfPlants)
//   - PlantList (state: no, props: listOfPlants[])
//     - PlantListItem (state: no, props:id,name,lastWateredDate,wateringInterval)

// React Render => Closer to EJS than jQuery

function App() {
  const [plants, setPlants] = useState(plantListObj);
  const [count, setCount] = useState(0);

  const listOfPlants = Object.values(plants);

  const updateWateredDate = (id) => {
    // We want to have a new version of plants (spread)
    const newPlants = { ...plants };
    // We want to have a new version of the plant that we are about to change
    const newPlant = { ...newPlants[id] };
    // Once I have a proper copy of plants and the singular plant, then I can modify
    const todayDate = new Date();
    newPlant.lastWateredDate = todayDate.toLocaleDateString();
    // We reinsert the new plant inside the list
    newPlants[id] = newPlant;

    // Update the state with the new plants object
    console.log(newPlants);
    setPlants(newPlants);
  };

  const waterEverything = () => {
    // We want to have a new version of plants (spread)
    const newPlants = { ...plants };

    for (const id in plants) {
      // We want to have a new version of the plant that we are about to change
      const newPlant = { ...newPlants[id] };
      // Once I have a proper copy of plants and the singular plant, then I can modify
      const todayDate = new Date();
      newPlant.lastWateredDate = todayDate.toLocaleDateString();
      // We reinsert the new plant inside the list
      newPlants[id] = newPlant;
    }

    setPlants(newPlants);
  };

  const addOne = () => {
    setCount(count + 1);
  };
  const addTen = () => {
    setCount((pendingState) => pendingState + 1); // I want to set the state to 1
    setCount((pendingState) => pendingState + 1); // I want to set the state to 2
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
  };

  console.log("APP RENDERED");
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={addOne}>add 1</button>
      <button onClick={addTen}>add 10</button>
      <Header amountOfPlants={listOfPlants.length} />
      <button onClick={waterEverything}>WATER EVERYTHING</button>
      <main>
        <PlantList listOfPlants={listOfPlants} updateWateredDate={updateWateredDate} />
      </main>
    </div>
  );
}

export default App;

// module.exports = Bob
// module.exports = {Bob:Bob, Robert:Robert,...}
