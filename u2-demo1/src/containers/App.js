import React from "react";
import Persons from "../components/Persons/Persons";
import classes from "../containers/App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Kerrigan" },
      { id: 2, name: "Zeratul" },
      { id: 3, name: "Tassadar" },
      { id: 4, name: "Raynor" },
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
        <div>
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
        <h1>{this.props.title}</h1>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />{" "}
        {person}
      </div>
    );
  }
}

export default App;
