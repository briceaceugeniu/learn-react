import React from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

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

  // region delete person
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
    const BtnStyled = styled.button`
      cursor: pointer;
      color: blue;
      padding: 6px;
      background-color: white;
      &:hover {
        background-color: red;
      }
      &::after {
        content: "${(props) => (props.alt ? "Hide" : "Show")}";
      }
    `;

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div className={`p-content`}>
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
    }

    return (
      <div className={`App`}>
        <BtnStyled
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        ></BtnStyled>
        {person}
      </div>
    );
  }
}

export default App;
