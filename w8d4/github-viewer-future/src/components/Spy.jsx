import { useEffect } from "react";

export default function Spy(props) {
  useEffect(() => {
    const report = (event) => console.log(event.clientX, event.clientY);
    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  return <span>🕵️</span>;
}
