import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    name: "Hafiz",
    username: "Titi",
  });
  const [users, setUsers] = useState(["Ade", "Bisi"]);

  const cuteFunction = () => "cute";

  const niceFunction = useCallback(() => "nice", [person.username]);

  useEffect(() => {
    console.log("Runs when count changes");
  }, [count]);

  useEffect(() => {
    console.log("Runs when person object changes");
  }, [person]);

  const { name, username } = person;

  const keysa = ["name", "username"];
  const dep = keysa.map((k) => {
    return person[k];
  });

  useEffect(() => {
    console.log(
      "Run only when the name or username property changes property changes"
    );
  }, dep);

  useEffect(() => {
    console.log("Run when the nice function changes");
  }, [niceFunction]);

  // useEffect(() => {
  //   console.log("Run only when cute function changes");
  // }, [cuteFunction]); dont use function as array dependencies

  useEffect(() => {
    console.log("Run only when user array changes");
  }, [users]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCount(count + 1)}>{count} clicks</button>
        <button onClick={() => setPerson({ ...person, name: "titi" })}>
          {person.name}
        </button>
        <button onClick={() => setUsers([...users])}>{users[0]}</button>
      </header>
    </div>
  );
}

export default App;
