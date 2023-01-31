import React from "react";
import MessageView from "../views/MessageView";
import Spacer from "../components/Spacer";
import UserReplyView from "../views/UserReplyView";

const USER_REPLIES = [
  { id: 1, alternatives: ["Lab 1", "Lab 2", "Lab 3"] },
  { id: 2, alternatives: ["Task 1.1", "Task 1.2", "Task 1.3"] },
];

const QUERIES = [
  "Hello there! What do you need help with today?",
  "All right! Let's see what we can find!",
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
      <MessageView query={QUERIES[levelState]} />
      <Spacer size={3} />
      <UserReplyView
        data={USER_REPLIES[levelState]}
        addReply={updateReplyListCB}
        reply={reply}
      />
    </div>
  );
}
