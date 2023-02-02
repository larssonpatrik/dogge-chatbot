import React from "react";
import MessageView from "../views/MessageView";
import Spacer from "../components/Spacer";
import UserReplyView from "../views/UserReplyView";
import ConversationListView from "../views/ConversationListView";
import LinkBubbleList from "../components/LinkBubbleList";
import { USER_REPLIES, QUERIES, RESULTS } from "../DATA";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { MetaText } from "../components/Typography";
import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";

export default function ChatPresenter() {
  const [levelState, setLevelState] = React.useState(0); // tells us which level the user is at and what the chatbot should respond with
  const [replyList, setReplyList] = React.useState([]); // list of indexes of responses

  function updateReplyListCB(resp) {
    setReplyList([...replyList, resp]);
    setLevelState(levelState + 1);
  }

  return (
    <Wrapper>
      <Spacer size={5} />
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Logo />
      </div>
      <ConversationListView
        queryData={QUERIES}
        userReplyData={USER_REPLIES}
        userReplyList={replyList}
      />
      <Spacer size={5} />

      {levelState < 2 ? (
        <>
          <MessageView query={QUERIES[levelState].query} />
          <Spacer size={3} />
          <UserReplyView
            data={USER_REPLIES[levelState]}
            addReply={updateReplyListCB}
          />
        </>
      ) : (
        // Needs link component in combination with bubble,
        // also how to present the right answer to user input?
        // Check with replyList to access right answer
        <div>
          <MessageView query={RESULTS[replyList[0]][replyList[1]].query} />
          <LinkBubbleList links={RESULTS[replyList[0]][replyList[1]].links} />
          <Spacer size={8} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MetaText>Did you find Dogge helpful?</MetaText>
            <Spacer size={2} />
            <div style={{ display: "flex", gap: 16 }}>
              <PrimaryButton>Yes, thank you Dogge!</PrimaryButton>
              <SecondaryButton>
                No, but thanks for trying Dogge!
              </SecondaryButton>
            </div>
          </div>
        </div>
      )}
      <Spacer size={8} />
    </Wrapper>
  );
}