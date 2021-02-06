import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: "Bobby" },
        { id: 2, name: "Martha" },
        { id: 3, name: "Cornel" },
      ],
      showPersons: true,
    };
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  delPersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    const btnStyle = {
      cursor: "pointer",
      padding: "8px",
      border: "",
      color: "black",
      backgroundColor: "white",
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map(({ name, id }, index) => {
            return (
              <Person
                click={() => this.delPersonHandler(index)}
                key={id}
                name={name}
                changeName={(event) => this.nameChangeHandler(event, id)}
              />
            );
          })}
        </div>
      );

      btnStyle.backgroundColor = "black";
      btnStyle.color = "white";
    }

    return (
      <div className={`App`}>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>
          Switch!
        </button>
        {person}
      </div>
    );
  }
}

export default App;
