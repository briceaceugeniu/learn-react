import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = () => {
  const controls = [
    { label: "Bacon", type: "bacon" },
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => {
        return <BuildControl key={control.label} label={control.label} />;
      })}
    </div>
  );
};

export default BuildControls;
