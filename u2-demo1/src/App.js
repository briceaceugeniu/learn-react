import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [name1, setName1] = useState("Boris");
  const [name2, setName2] = useState("Ludmila");

  const switchNameHandler = () => {
    setName1("Ivan");
    setName2("Marusika");
  };

  return (
    <div className={`App`}>
      <button onClick={switchNameHandler}>Switch!</button>
      <Person name={name1} />
      <Person name={name2}>The Big Boss</Person>
    </div>
  );
};

export default App;
