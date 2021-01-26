import React, { useState } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import "./App.css";

function App() {
  const [username1, setUserName1] = useState("");
  const [username2, setUserName2] = useState("");

  return (
    <div className="App">
      <UserOutput userName={username1} />
      <UserInput change={(e) => setUserName1(e)} />
      <UserOutput userName={username2} />
      <UserInput change={(e) => setUserName2(e)} />
    </div>
  );
}

export default App;
