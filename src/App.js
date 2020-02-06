import React, { useState, useEffect } from "react";
import "./styles.css";

const NameComponent = ({ defaultName: { defaultName, counter } }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(defaultName);
  }, [defaultName]);

  return (
    <div
      style={{ border: "1px solid black", margin: "10px 0", padding: "10px 0" }}
    >
      <p>{counter}</p>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};

const SurnameComponent = ({ defaultSurname }) => {
  const [surname, setSurname] = useState("");
  useEffect(() => {
    setSurname(defaultSurname);
  }, [defaultSurname]);

  return (
    <div>
      <input value={surname} onChange={e => setSurname(e.target.value)} />
    </div>
  );
};

export default function App() {
  const [dataFromServer, setDataFromServer] = useState({
    counter: 0,
    defaultName: "Mikita",
    defaultSurname: "Halaburda"
  });
  return (
    <div className="App">
      <h1>{dataFromServer.counter}</h1>
      <button
        onClick={() =>
          setDataFromServer(prev => ({ ...prev, counter: prev.counter + 1 }))
        }
      >
        Click
      </button>
      <NameComponent defaultName={dataFromServer} />
      <SurnameComponent defaultSurname={dataFromServer.defaultSurname} />
    </div>
  );
}
