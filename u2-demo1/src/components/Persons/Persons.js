import React from "react";
import Person from "./Person/Person";

class Persons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "SNAPSHOT" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate || SS: ", snapshot);
  }

  render() {
    console.log("[Persons.js] render");
    return this.props.persons.map(({ name, id }, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          key={id}
          name={name}
          changeName={(event) => this.props.changed(event, id)}
        />
      );
    });
  }
}

export default Persons;
