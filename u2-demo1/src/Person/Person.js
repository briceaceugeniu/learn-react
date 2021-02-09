import React from "react";
import "./Person.css";
import styled from "styled-components";

const Person = (props) => {
  const style = {
    "@media (minwidth: 800px)": {
      width: "350px",
      backgroundColor: "red !important",
    },
  };

  const StyledDiv = styled.div`
    padding: 4px;
    cursor: cell;
  `;

  return (
    <div className={`ui card`}>
      <div className={`content`} style={style}>
        <div className={`header`}>
          <p className={`name css-selector`}>My name is {props.name} </p>
          <i
            onClick={() => props.click()}
            className=" delIcon ban icon right floated"
          />
        </div>
        <StyledDiv>
          <p>I am a good person, think...</p>
        </StyledDiv>

        <div className="ui transparent input small">
          <input
            onChange={props.changeName}
            type="text"
            placeholder="New name..."
            value={props.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Person;
