import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

let txt3 = "I am out!";

const Comment = () => {
  let txt2 = "What did you say?!";
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <p>Are you sure you want to continue?</p>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Samuel"
          text="Hello World"
          ts={getTime()}
          avatarSrc="https://source.unsplash.com/random"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bobby"
          text={txt2}
          ts={getTime()}
          avatarSrc="https://source.unsplash.com/random"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Luisa"
          text={txt3}
          ts={getTime()}
          avatarSrc="https://source.unsplash.com/random"
        />
      </ApprovalCard>
    </div>
  );
};

function getTime() {
  return new Date().toLocaleTimeString();
}

ReactDOM.render(<Comment />, document.querySelector("#root"));
