import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { img: [] };

  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos/", {
      params: {
        query: term,
      },
    });

    this.setState({ img: response.data.results });
  }

  render() {
    return (
      <div className={`ui container`} style={{ margin: "13px" }}>
        <SearchBar onSubmit={(t) => this.onSearchSubmit(t)} />
        <ImageList list={this.state.img} />
        <div>Found: {this.state.img.length} images! </div>
      </div>
    );
  }
}

export default App;
