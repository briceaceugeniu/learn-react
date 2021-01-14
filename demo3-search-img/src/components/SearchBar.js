import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className={`ui segment`}>
        <form className={`ui form`}>
          <div className={`field`}>
            <label htmlFor="searchInput">Image Search</label>
            <input id={`searchInput`} type="text" placeholder="Search..." />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
