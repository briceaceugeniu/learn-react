import React from "react";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
  }

  onInputChange = (e) => {
    this.props.change(e.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange} />
      </div>
    );
  }
}

export default UserInput;
