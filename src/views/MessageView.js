import React from "react";
import Bubble from "../components/Bubble";
import Spacer from "../components/Spacer";
import { MetaText, TimeText } from "../components/Typography";

export default function MessageView(props) {
  const time = new Date();
  let currentTime =
    time.getHours().toString() + ":" + time.getMinutes().toString();

  return (
    <div className="message-container">
      <TimeText>{currentTime}</TimeText>
      <MetaText>Dogge</MetaText>
      <Spacer size={1} />
      <Bubble message={props.query} />
    </div>
  );
}
