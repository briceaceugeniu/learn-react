import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className={`ui form`}>
        <div className={`field`}>
          <label htmlFor="input">Enter Text</label>
          <input
            value={text}
            id={`input`}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        about={`Language`}
        options={options}
      />
      <hr />
      <h3 className={`ui header`}>Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
