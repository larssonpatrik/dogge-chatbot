import React from "react";
import "./Bubble.css";
import { MessageText } from "./Typography";

export default function Bubble(props) {
  if (props.userReply) {
    return (
      <div
        className="bubble-container"
        style={{ backgroundColor: "#F1B777", ...props.style }}
      >
        <MessageText>{props.children}</MessageText>
      </div>
    );
  } else {
    return (
      <div className="bubble-container" style={{ ...props.style }}>
        <MessageText>{props.children}</MessageText>
      </div>
    );
  }
}
