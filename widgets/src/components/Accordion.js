import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.id}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className={`dropdown icon`} />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className={`ui styled accordion`}>{renderedItems}</div>
    </React.Fragment>
  );
};

export default Accordion;
