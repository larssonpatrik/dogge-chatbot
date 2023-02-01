import React from "react";
import Bubble from "./Bubble";

export default function ResponseBox(props) {
  return (
    <div onClick={props.action}>
      <Bubble userReply={true} style={{ cursor: "pointer" }}>
        {props.message}
      </Bubble>
    </div>
  );
}
