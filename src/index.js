import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = () => {
    const btnText = "Click to submit";

  return (
      <div>
        <label className="label" htmlFor="name">Enter your name:</label>
        <input type="text" id="name" />
          <button style={{backgroundColor: 'bisque', color: 'aquamarine'}}>{btnText}</button>
      </div>
  );
};

// Show the React Component on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);