import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

// What the heck is React.StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App title={`Person Manager`} />
  </React.StrictMode>,
  document.getElementById("root")
);
