import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    return () => {
      console.log("[Cockpit.js] return -> useEffect");
    };
  }, []);

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
