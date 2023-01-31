import React from "react";
import Bubble from "./Bubble";

export default function ResponseBox(props) {
  return (
    <div onClick={props.action}>
      <Bubble
        message={props.message}
        userReply={true}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
