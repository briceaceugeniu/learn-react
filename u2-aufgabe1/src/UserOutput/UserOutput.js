import React from "react";

class UserOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Output: {this.props.userName}</p>
        <p>Something else..</p>
      </div>
    );
  }
}

export default UserOutput;
