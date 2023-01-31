import React from "react";
import Bubble from "../components/Bubble";
import Spacer from "../components/Spacer";
import { MetaText, TimeText } from "../components/Typography";

export default function MessageView(props) {
  return (
    <div className="message-container">
      <TimeText>08.32</TimeText>
      <MetaText>Dogge</MetaText>
      <Spacer size={1} />
      <Bubble message={props.query} />
    </div>
  );
}
