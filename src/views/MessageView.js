import React from "react";
import Bubble from "../components/Bubble";
import Spacer from "../components/Spacer";
import { MetaText, TimeText } from "../components/Typography";

export default function MessageView(props) {
  return (
    <div>
      <TimeText />
      <Spacer size={3} />
      <MetaText style={{ fontSize: 16 }}>Dogge</MetaText>
      <Spacer size={0} />
      <Bubble>{props.query}</Bubble>
    </div>
  );
}
