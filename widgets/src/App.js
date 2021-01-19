import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    id: 1,
    title: "Was ist React?",
    content: "React ist eine beliebte JavaScript framework.",
  },
  {
    id: 2,
    title: "Wie verwendet man React?",
    content: "Indem man erstellt React Components",
  },
  {
    id: 3,
    title: "Warum React",
    content: "Weil es cool ist!",
  },
];

const colorOptions = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Green",
    value: "green",
  },
];

export default () => {
  const [selected, setSelected] = useState(colorOptions[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Button
      </button>
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
      {showDropdown ? (
        <Dropdown
          about={`Color`}
          options={colorOptions}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};
