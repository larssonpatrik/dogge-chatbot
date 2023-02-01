import React from "react";
import MessageView from "./MessageView";
import Spacer from "../components/Spacer";
import Bubble from "../components/Bubble";

// takes in list as a prop and displays a message and user-response
export default function ConversationListView(props) {
  const QUERIES = props.queryData;
  const REPLIES = props.userReplyData;
  const userReplyList = props.userReplyList;

  return userReplyList.map((replyIndex, i) => {
    return (
      <div key={i}>
        <MessageView query={QUERIES[i].query} />
        <Spacer size={3} />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Bubble userReply={true}>
            {REPLIES[i].alternatives[replyIndex]}
          </Bubble>
        </div>
      </div>
    );
  });
}
