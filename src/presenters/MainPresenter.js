import React from "react";
import MessageView from "../views/MessageView";
import Spacer from "../components/Spacer";
import UserReplyView from "../views/UserReplyView";
import ConversationListView from "../views/ConversationListView";

const USER_REPLIES = [
  { id: 1, alternatives: ["Lab 1", "Lab 2", "Lab 3"] },
  { id: 2, alternatives: ["Task 1.1", "Task 1.2", "Task 1.3"] },
  { id: 3, alternatives: ["Task 1.1", "Task 1.2", "Task 1.3"] },
];

const QUERIES = [
  "Hello there! What do you need help with today?",
  "Ok! And what task are you curently stuck on?",
];

export default function MainPresenter() {
  const [levelState, setLevelState] = React.useState(0); // tells us which level the user is at and what the chatbot should respond with
  const [replyList, setReplyList] = React.useState([]); // list of indexes of responses
  const [reply, setReply] = React.useState(); // list of indexes of responses

  function updateReplyListCB(resp) {
    setReplyList([...replyList, resp]);
    setLevelState(levelState + 1);
  }

  return (
    <div
      style={{
        margin: "0 20vw",
        padding: "0 32px",
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <Spacer size={5} />

      <ConversationListView
        queryData={QUERIES}
        userReplyData={USER_REPLIES}
        userReplyList={replyList}
      />
      <MessageView query={QUERIES[levelState]} />
      <Spacer size={3} />
      <UserReplyView
        data={USER_REPLIES[levelState]}
        addReply={updateReplyListCB}
      />
    </div>
  );
}
