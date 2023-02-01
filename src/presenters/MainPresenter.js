import React from "react";
import MessageView from "../views/MessageView";
import Spacer from "../components/Spacer";
import UserReplyView from "../views/UserReplyView";
import ConversationListView from "../views/ConversationListView";
import LinkBubbleList from "../components/LinkBubbleList";

const USER_REPLIES = [
  { id: 1, alternatives: ["Lab 1", "Lab 2", "Lab 3"] },
  { id: 2, alternatives: ["Task 1.1", "Task 1.2", "Task 1.3"] },
  { id: 3, alternatives: ["Task 1.1", "Task 1.2", "Task 1.3"] },
];

const QUERIES = [
  { id: 1, query: "Hello there! What do you need help with today?" },
  { id: 2, query: "Ok! And what task are you curently stuck on?" },
];

const RESULTS = [
  [
    {
      id: 1,
      query:
        "All right! So this task handles string manipulation in Python. Here are some helpful links to help you on your way!",
      links: [
        {
          label: "String Manipulation",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "String Operations",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
    {
      id: 2,
      query:
        "Great! This task is about dictionaries in Python! Here are some helpful links to help you on your way!",
      links: [
        {
          label: "Dictionaries in Python",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "Dictionary commands",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
  ],
  [
    {
      id: 3,
      query:
        "Fantastic! This task is quite tricky, it is about file reading and writing. Here are some helpful links to help you on your way!",
      links: [
        {
          label: "File Writing",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "File Reading",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
    {
      id: 4,
      query:
        "Awesome! Let's learn about Quantum Python Programming! Here are some helpful links to help you on your way!",
      links: [
        {
          label: "Elusive semicolons",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "Alien malware",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
  ],
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
      {levelState < 2 ? (
        <>
          <MessageView query={QUERIES[levelState].query} />
          <UserReplyView
            data={USER_REPLIES[levelState]}
            addReply={updateReplyListCB}
          />
        </>
      ) : (
        // Needs link component in combination with bubble,
        // also how to present the right answer to user input?
        // Check with replyList to access right answer
        <>
          <MessageView query={RESULTS[replyList[0]][replyList[1]].query} />
          <LinkBubbleList links={RESULTS[replyList[0]][replyList[1]].links} />
        </>
      )}
    </div>
  );
}
