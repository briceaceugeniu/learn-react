import React from "react";
import "../css/SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className={`search-bar ui segment ctm-searchBar`}>
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className={`ui form`}
        >
          <div className="ctm-inputField ui icon input">
            <input
              type="text"
              placeholder="Search something..."
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
