import React from "react";

class TodoCreator extends React.Component {
  state = { newItemText: "" };

  updateNewTextValue = (value) => {
    this.setState({ newItemText: value });
  };

  newItem = () => {
    if (this.state.newItemText.trim().length < 1) {
      return;
    }
    this.props.callback(this.state.newItemText);
    this.setState({ newItemText: "" });
  };

  render() {
    return (
      <React.Fragment>
        <input
          className={`form-control`}
          value={this.state.newItemText}
          onChange={(e) => this.updateNewTextValue(e.target.value)}
        />
        <button className={`btn btn-primary mt-1`} onClick={this.newItem}>
          Add
        </button>
      </React.Fragment>
    );
  }
}

export default TodoCreator;
