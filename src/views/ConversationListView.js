import React from "react";
import MessageView from "./MessageView";
import Spacer from "../components/Spacer";
import Bubble from "../components/Bubble";
import { TimeText, MetaText } from "../components/Typography";

// takes in list as a prop and displays a message and user-response
export default function ConversationListView(props) {
  const QUERIES = props.queryData;
  const REPLIES = props.userReplyData;
  const userReplyList = props.userReplyList;

  return userReplyList.map((replyIndex, i) => {
    return (
      <div key={i}>
        <Spacer size={5} />
        <MessageView query={QUERIES[i].query} />
        <Spacer size={3} />
        <TimeText />
        <Spacer size={3} />
        <MetaText style={{ textAlign: "right" }}>You</MetaText>
        <Spacer size={0} />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Bubble userReply={true}>
            {REPLIES[i].alternatives[replyIndex]}
          </Bubble>
        </div>
      </div>
    );
  });
}
