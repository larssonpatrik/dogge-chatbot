import React from "react";
import Bubble from "../components/Bubble";
import Spacer from "../components/Spacer";
import { MetaText, TimeText } from "../components/Typography";

export default function MessageView(props) {
  return (
    <div className="message-container">
      <TimeText />
      <Spacer size={3} />
      <MetaText>Dogge</MetaText>
      <Spacer size={0} />
      <Bubble>{props.query}</Bubble>
    </div>
  );
}
