import React from "react";
import Bubble from "../components/Bubble";
import ResponseBox from "../components/ResponseBox";
import Spacer from "../components/Spacer";
import { MetaText } from "../components/Typography";
import "./UserReplyView.css";

export default function UserReplyView(props) {
  console.log(props);
  if (props.reply) {
    return (
      <div className="response-msg-container">
        <Bubble userReply={true} message={props.reply} />
      </div>
    );
  } else {
    return (
      <div className="response-msg-container">
        <MetaText>Please choose an alternative!</MetaText>
        <Spacer size={1} />
        <div className="response-box-container">
          {props.data.alternatives.map((reply, i) => {
            return (
              <ResponseBox message={reply} action={() => props.addReply(i)} />
            );
          })}
        </div>
      </div>
    );
  }
}
