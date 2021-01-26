import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className={`ui card`}>
      <div className={`content`}>
        <div className={`header`}>
          <p>My name is {props.name} </p>
          <i
            onClick={() => props.click()}
            className=" delIcon ban icon right floated"
          />
        </div>
        <p>I am a good person, think...</p>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Person;
