import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";
import CommitList from "./components/CommitList";

function App() {
  const [spyFound, setSpyFound] = useState(false);
  const [commits, setCommits] = useState(null);

  const fetchCommits = (formData) => {
    const url = `https://api.github.com/repos/${formData.owner}/${formData.repo}/commits`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCommits(data));
  };

  return (
    <div className="App">
      <Header />
      <RepoForm onSubmit={fetchCommits} />
      {!spyFound && <Spy />}
      {commits && <CommitList commits={commits} />}
    </div>
  );
}

export default App;
