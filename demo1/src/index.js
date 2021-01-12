import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";

let txt3 = "I am out!";

const Comment =  () => {
    let txt2 = "What did you say?!";
  return (
    <div className="ui container comments">
      <CommentDetail author="Samuel" text="Hello World" ts={getTime()} avatarSrc="https://source.unsplash.com/random"/> <br/>
      <CommentDetail author="Bobby" text={txt2} ts={getTime()} avatarSrc="https://source.unsplash.com/random"/> <br/>
      <CommentDetail author="Luisa" text={txt3} ts={getTime()} avatarSrc="https://source.unsplash.com/random"/>
    </div>
  );
};


function getTime() {
    return (new Date()).toLocaleTimeString()
}


ReactDOM.render(
  <Comment />,
  document.querySelector('#root')
);