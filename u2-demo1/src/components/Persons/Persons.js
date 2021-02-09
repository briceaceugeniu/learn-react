import React from "react";
import Person from "./Person/Person";

const Persons = (props) =>
  props.persons.map(({ name, id }, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        key={id}
        name={name}
        changeName={(event) => props.changed(event, id)}
      />
    );
  });

export default Persons;
