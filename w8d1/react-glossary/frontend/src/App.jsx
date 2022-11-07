import { useState } from "react";
import axios from "axios";

import StatementList from "./components/StatementList";
import StatementForm from "./components/StatementForm";
import Header from "./components/Header";

import "./App.css";
import initialStatements from "./data/statementData";
import Statements from "./components/Statements";
import { useEffect } from "react";

function App() {
  const [statements, setStatements] = useState([]); // GET METHOD
  const [error, setError] = useState("");

  const fetchAllStatements = () => {
    return axios.get("/api/statements").then((res) => res.data);
  };

  const postAStatement = (formData) => {
    return axios.post("/api/statements", formData).then((res) => res.data);
  };

  useEffect(() => {
    if (statements.length === 0) {
      fetchAllStatements()
        .then((data) => setStatements(data))
        .catch((err) => console.log(err));
    }
  }, []);

  const addStatement = (formData) => {
    // POST METHOD
    // const id = statements.length + 1;
    postAStatement(formData)
      .then((data) => {
        const newStatement = { id: data.id, ...formData };
        const updatedStatements = [newStatement, ...statements];

        setStatements(updatedStatements);
        setError("");
      })
      .catch(() => setError("OH NO SOMETHING BAD HAPPENED"));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h2>Form!</h2>
          <StatementForm onSubmit={addStatement} />
          {error && <p>{error}</p>}
        </section>
        <Statements statements={statements} />
      </main>
    </div>
  );
}

export default App;
