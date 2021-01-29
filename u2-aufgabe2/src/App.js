import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App ui container">
      <h3 className={`ui brown header`}>Enter something...</h3>
      <div className="ui input large active">
        <input type="text" placeholder="..." />
      </div>
        <div className="ui grid">
            <div className="four wide column">H</div>
            <div className="four wide column">E</div>
            <div className="four wide column">L</div>
            <div className="four wide column">L</div>
            <div className="four wide column">O</div>
            <div className="four wide column">!</div>
            <div className="four wide column">!</div>
        </div>
    </div>
  );
}

export default App;
