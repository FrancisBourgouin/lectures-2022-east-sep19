import logo from "./logo.svg";
import "./App.css";
import PlantListItem from "./PlantListItem";
import { useState } from "react";
import Button from "./Button";

// const numString = $("span").text()
// const numNum = Number(numString)
// $("span").text(numNum + 1)

function App() {
  const [count, setCount] = useState(0);
  const [plants, setPlants] = useState("plantData");

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <p>Count is : {count}</p>
      <Button count={count} setCount={incrementCount} />
      {/* <HomePage />
      <LoginPage />
      <RegisterPage /> */}
    </div>
  );
}

export default App;
