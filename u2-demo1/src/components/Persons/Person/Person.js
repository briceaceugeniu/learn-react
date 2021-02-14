import React from "react";
import "./Person.css";

class Person extends React.Component {
  render() {
    console.log("[Person.js] render");

    return (
      <div className={`ui card`}>
        <div className={`content`}>
          <div className={`header`}>
            <p className={`name css-selector`}>My name is {this.props.name} </p>
            <i
              onClick={() => this.props.click()}
              className=" delIcon ban icon right floated"
            />
          </div>
          <div>
            <p>I am a good person, think...</p>
          </div>

          <div className="ui transparent input small">
            <input
              onChange={this.props.changeName}
              type="text"
              placeholder="New name..."
              value={this.props.name}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
