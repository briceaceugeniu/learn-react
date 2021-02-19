import React from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const btnClasses = [
    classes.btnPers,
    props.showPersons ? classes.btnHiddePers : classes.btnShowPers,
  ];

  return (
    <button className={btnClasses.join(" ")} onClick={props.clicked}>
      {" "}
    </button>
  );
};

export default Cockpit;