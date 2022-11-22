import { useState } from "react";
import { listen, findBiggestIndex } from "./voiceHelpers";
import "./App.css";

function App() {
  const [currentLabel, setCurrentLabel] = useState("...");

  const listenCallback = (result) => {
    const labels = [
      "Background Noise",
      "🌑➡️☀️ / 🚗",
      "😂😂😂",
      "🏙️🏙️🏙️",
      "🕵️🕵️🕵️",
      "🔥🍞🔥",
    ];
    const biggestIndex = findBiggestIndex(result.scores);
    const biggestLabel = labels[biggestIndex];
    biggestIndex !== 0 && setCurrentLabel(biggestLabel);
  };

  const listenOptions = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  return (
    <div className="App">
      <header>
        <h1>Super voice to emoji ! :D </h1>
      </header>
      <button onClick={() => listen(listenOptions, listenCallback)}>Listen! :D </button>
      {currentLabel === "🕵️🕵️🕵️" && <h1 style={{ fontSize: "2em" }}>{currentLabel}</h1>}
      {currentLabel !== "🕵️🕵️🕵️" && <h1 style={{ fontSize: "5em" }}>{currentLabel}</h1>}
    </div>
  );
}

export default App;
