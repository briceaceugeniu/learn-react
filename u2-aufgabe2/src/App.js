import React from "react";
import "./App.css";
import Char from "./Char/Char";
import $ from "jquery";

class App extends React.Component {
  state = {
    textInput: "",
  };

  render() {
    const outVal = () => {
      const chars = this.state.textInput.split("");
      return chars.map((c, index) => {
        return (
          <div
            onClick={() => delChar(index)}
            className={`card cstmCard`}
            key={index}
          >
            <Char char={c} />
          </div>
        );
      });
    };

    const delChar = (index) => {
      let newTextInput = this.state.textInput;
      newTextInput =
        newTextInput.slice(0, index) + newTextInput.slice(index + 1);
      this.setState({ textInput: newTextInput });
    };

    return (
      <div className="App ui container">
        <h3 className={`ui brown header`}>Enter something...</h3>
        <div className="ui input large active textInput">
          <input
            type="text"
            placeholder=""
            onChange={(e) => this.setState({ textInput: e.target.value })}
            value={this.state.textInput}
          />
        </div>
        <div className={`cont`}>
          <div className={`ui five cards glass`}>{outVal()}</div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
    );
  }
}

export default App;
