import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, about, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }

        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderOptions = options.map((option) => {
    if (option !== selected) {
      return (
        <div
          onClick={() => {
            onSelectedChange(option);
          }}
          key={option.value}
          className={`item`}
        >
          {option.label}
        </div>
      );
    }
  });

  return (
    <div ref={ref} className={`ui form`}>
      <div className={`field`}>
        <label className={`label`}>{`Select a ${about}`}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""} `}
        >
          <i className={`dropdown icon`} />
          <div className={`text`}>{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
