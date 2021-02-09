import React from "react";
import classes from "../containers/App.module.css";

const Cockpit = (props) => {
  const btnClasses = [
    classes.btnPers,
    this.state.showPersons ? classes.btnHiddePers : classes.btnShowPers,
  ];

  return (
    <button className={btnClasses.join(" ")} onClick={props.clicked}>
      {" "}
    </button>
  );
};

export default Cockpit;
