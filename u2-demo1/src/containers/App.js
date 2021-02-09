import React from "react";
import Persons from "../components/Persons/Persons";
import classes from "../containers/App.module.css";
import Cockpit from "../Cockpit/Cockpit";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Bobby" },
      { id: 2, name: "Martha" },
      { id: 3, name: "Cornel" },
    ],
    showPersons: true,
  };

  //region toggle button
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  // endregion

  // region delete person / change name
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
  //endregion

  render() {
    let person = null;

    if (this.state.showPersons) {
      person = (
        <div className={`p-content`}>
          <Persons
            persons={this.state.persons}
            clicked={this.delPersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit clicked={this.togglePersonsHandler} /> {person}
      </div>
    );
  }
}

export default App;
