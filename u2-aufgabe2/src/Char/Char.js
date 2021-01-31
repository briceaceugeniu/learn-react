import React from "react";
import "./Char.css";

const Char = (props) => {
  return <h1 className={`char`}>{props.char}</h1>;
};

export default Char;
