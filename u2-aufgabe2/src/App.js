import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3 className={`ui brown header`}>Enter something...</h3>
      <div className="ui big icon input">
        <input type="text" placeholder="..." />
      </div>
    </div>
  );
}

export default App;
