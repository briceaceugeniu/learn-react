import React from "react";

class VisibilityControl extends React.Component {
  render() {
    return (
      <div className={`form-check`}>
        <input
          id={`showDone`}
          className={`form-check-input`}
          type="checkbox"
          checked={this.props.isChecked}
          onChange={(e) => this.props.callback(e.target.checked)}
        />
        <label htmlFor={`showDone`} className={`form-check-label`}>
          Show {this.props.description}
        </label>
      </div>
    );
  }
}

export default VisibilityControl;
