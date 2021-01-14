import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className={`ui segment`}>
        <form
          className={`ui form`}
          autoComplete={`off`}
          onSubmit={this.onFormSubmit}
        >
          <div className={`field`}>
            <label htmlFor="searchInput">Image Search</label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              id={`searchInput`}
              type="text"
              placeholder="Search..."
              value={`${this.state.term}`}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
