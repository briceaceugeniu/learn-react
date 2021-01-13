import React from "react";

const SeasonDisplay = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <img src={props.icon} alt="icon" />
    </div>
  );
};

export default SeasonDisplay;
