import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null };

  componentDidMount() {
    // geolocation
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ lat: err.message });
      }
    );
  }

  render() {
    return <SeasonDisplay lat={this.state.lat} />;
  }
}

export default App;
