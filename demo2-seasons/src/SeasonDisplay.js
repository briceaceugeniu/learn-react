import "./SeasonDisplay.css";

import React from "react";

const seasonConfig = {
  summer: {
    text: "Sommer time!!",
    imgSrc:
      "https://media.tenor.com/images/aae2269344e98521aa0e624323f4c549/tenor.gif",
    icon: "huge sun icon",
  },
  winter: {
    text: "Brr! Ist es kalt!",
    imgSrc: "https://www.123gif.de/gifs/winter/winterlandschaft-0042.gif",
    icon: "huge snowflake icon",
  },
};

function getSeason(month, hemisphere) {
  if (month >= 3 && month < 10) {
    if (hemisphere === "N") return "summer";
    else return "winter";
  } else if (hemisphere === "N") return "winter";
  else return "summer";
}

// Component
const SeasonDisplay = (props) => {
  let month = new Date().getMonth() + 1;
  let hemisphere = props.lat >= 0 ? "N" : "S";
  let season = getSeason(month, hemisphere);

  let { text, imgSrc, icon } = seasonConfig[season];

  return (
    <div>
      <i className={`cost-icon-${season} ${icon}`} />
      <i className={`cost-icon-${season} ${icon}`} />
      <p className={`txt-${season}`}>{text}</p>
      <img src={imgSrc} alt="season" />
    </div>
  );
};

export default SeasonDisplay;
