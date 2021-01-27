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

  nameChangeHandler = () => {
    this.setState({});
  };

  render() {
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
                changeName={null}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className={`App`}>
        <button onClick={this.togglePersonsHandler}>Switch!</button>
        {person}
      </div>
    );
  }
}

export default App;
