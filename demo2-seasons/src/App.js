import React from "react";
import SeasonDisplay from "./SeasonDisplay";

let currentMonth = new Date().getMonth() + 1;
let hemisphere = whatHemisphere();
let season = getSeason(currentMonth, hemisphere);

const App = () => {
  return <SeasonDisplay icon={getIcon(season)} text={getText(season)} />;
};

// geolocation
window.navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);

function whatHemisphere() {
  let y = new Date();
  if (y.getTimezoneOffset == undefined) return null;
  y = y.getFullYear();
  let jan = -new Date(y, 0, 1, 0, 0, 0, 0).getTimezoneOffset();
  let jul = -new Date(y, 6, 1, 0, 0, 0, 0).getTimezoneOffset();
  let diff = jan - jul;
  if (diff < 0) return "N";
  if (diff > 0) return "S";
  return null;
}

function getSeason(month, hemisphere) {
  if (month >= 3 && month < 10) {
    if (hemisphere === "N") return "S";
    else return "W";
  } else if (hemisphere === "N") return "W";
  else return "S";
}

function getIcon(season) {
  if (season === "W") {
    return "https://www.123gif.de/gifs/winter/winterlandschaft-0042.gif";
  } else
    return "https://media.tenor.com/images/aae2269344e98521aa0e624323f4c549/tenor.gif";
}

function getText(season) {
  if (season === "S") {
    return "Sommer time!!";
  } else return "Brr! Ist es kalt!";
}

export default App;
