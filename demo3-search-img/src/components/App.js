import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className={`ui container`} style={{ margin: "13px" }}>
        <SearchBar />
        <div>Halli !Hallo from App</div>
      </div>
    );
  }
}

export default App;
