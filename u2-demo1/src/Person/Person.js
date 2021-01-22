import React from "react";

const Person = (props) => {
  return (
    <div>
      <p>My name is {props.name} </p>
      <p>I am a good person, think...</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
