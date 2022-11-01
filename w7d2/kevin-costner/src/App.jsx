import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import PlantList from "./components/PlantList";
import { plants } from "./data/plantData";

// JSX => XML (json) => HTML

// $("body").append("<h1>Some title</h1>")

// const $title = $("<h1>")
// $title.text("Some title")
// $title.on('click', () => ...)
// $("body").append($title)

// ReactDOM.createElement("div", {content:"..."})

// Method, url, data, datatype, formData, success...
// const someFunction = (param1,param1,param1,param1)
// someFunction(null,null,null,5)

// $.ajax({ method: "GET" });

// {
//   /* <Header /> */
// }

{
  /* <a href=".." value="..." click="..."></a> */
}
// <%= %> => {...}

// State: Holding dynamic data
// State changes in React are more like EJS/Express than jQuery
// Rerender => refresh

function App() {
  const plantCount = plants.length;
  const date = new Date("2022-11-01");

  return (
    <div className="App">
      <Header plantCount={plantCount} name="bob" chicken />
      {date.toDateString()}
      {/* {Header({plantCount})} */}
      <main>
        <PlantList plants={plants} />
      </main>
    </div>
  );
}

export default App;
