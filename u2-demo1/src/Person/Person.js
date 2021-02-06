import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className={`ui card`} style={{ borderColor: "red" }}>
      <div className={`content`}>
        <div className={`header`}>
          <p className={`name css-selector`}>My name is {props.name} </p>
          <i
            onClick={() => props.click()}
            className=" delIcon ban icon right floated"
          />
        </div>
        <p>I am a good person, think...</p>
        <div className="ui transparent input small">
          <input
            onChange={props.changeName}
            type="text"
            placeholder="New name..."
            value={props.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Person;
