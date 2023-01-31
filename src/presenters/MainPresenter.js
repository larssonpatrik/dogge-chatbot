import React from "react";
import MessageView from "../views/MessageView";
import Spacer from "../components/Spacer";
import UserReplyView from "../views/UserReplyView";
import ConversationListView from "../views/ConversationListView";
import Bubble from "../components/Bubble";

const USER_REPLIES = [
  { id: 1, alternatives: ["Lab 1", "Lab 2", "Lab 3"] },
  { id: 2, alternatives: ["Task 1.1", "Task 1.2", "Task 1.3"] },
  { id: 3, alternatives: ["Task 1.1", "Task 1.2", "Task 1.3"] },
];

const QUERIES = [
  { id: 1, query: "Hello there! What do you need help with today?" },
  { id: 2, query: "Ok! And what task are you curently stuck on?" },
  {
    id: 3,
    query:
      "All right! So this task handles string manipulation in Python. Here are some helpful links to help you on your way!",
    links: [
      {
        label: "String manipulation",
        url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
      },
    ],
  },
];

export default function MainPresenter() {
  const [levelState, setLevelState] = React.useState(0); // tells us which level the user is at and what the chatbot should respond with
  const [replyList, setReplyList] = React.useState([]); // list of indexes of responses

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
      <MessageView query={QUERIES[levelState].query} />
      <Spacer size={3} />
      {levelState < 2 ? (
        <UserReplyView
          data={USER_REPLIES[levelState]}
          addReply={updateReplyListCB}
        />
      ) : (
        // Needs link component in combination with bubble,
        // also how to present the right answer to user input?
        // Check with replyList to access right answer
        <a href={QUERIES[levelState].links[0].url}>
          <Bubble message={QUERIES[levelState].links[0].label} />
        </a>
      )}
    </div>
  );
}
