import { useState, useEffect } from "react";

export default function Effect(props) {
  const [count, setCount] = useState(0);
  const [dokou, setDokou] = useState(1);
  const [yoda, setYoda] = useState(2);

  const startBad = () => setCount(count + 1);

  useEffect(() => {
    setDokou(dokou + 1);
  }, [count]);

  useEffect(() => {
    setDokou(dokou + 1);
  }, [dokou]);

  const start = () => {
    setCount(count + 1);
    setDokou(dokou + 1);
    setDokou(dokou + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <p>dokou: {dokou}</p>
      <p>yoda: {yoda}</p>
      <button onClick={start}>start</button>
    </div>
  );
}
