import React from "react";

class App extends React.Component {
  state = { count: 3 };

  isEven = (number) => {
    return number % 2 === 0 ? "Even" : "Odd";
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render = () => (
    <div className={`container-fluid p-4`}>
      <div className={`row bg-info text-white p-2`}>
        <div className={`col font-weight-bold`}>Value</div>
        <div className={`col-6 font-weight-bold`}>Even?</div>
      </div>
      <div className={`row bg-light p-2 border`}>
        <div className={`col`}>{this.state.count}</div>
        <div className={`col-6`}>{this.isEven(this.state.count)}</div>
      </div>
      <div className={`row`}>
        <div className={`col`}>
          <button className={`btn btn-info m-2`} onClick={this.handleClick}>
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
