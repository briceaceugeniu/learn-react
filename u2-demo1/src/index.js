import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

// What the f**k is React.StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App title={`Person Manager`} />
  </React.StrictMode>,
  document.getElementById("root")
);
