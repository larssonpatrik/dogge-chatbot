import React from "react";
import MessageView from "../views/MessageView";
import Spacer from "../components/Spacer";
import UserReplyView from "../views/UserReplyView";
import ConversationListView from "../views/ConversationListView";
import LinkBubbleList from "../components/LinkBubbleList";
import { USER_REPLIES, QUERIES, RESULTS } from "../DATA";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../components/Buttons";
import { MetaText } from "../components/Typography";
import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";
import { BackNav } from "../components/Navigation";
import { useNavigate } from "react-router-dom";

export default function ChatPresenter() {
  const [levelState, setLevelState] = React.useState(0); // tells us which level the user is at and what the chatbot should respond with
  const [replyList, setReplyList] = React.useState([]); // list of indexes of responses
  const [satisfaction, setSatisfaction] = React.useState(); // Checks what the final response after rating the experience should be

  const navigate = useNavigate();

  function updateReplyListCB(resp) {
    setReplyList([...replyList, resp]);
    setLevelState(levelState + 1);
  }

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <>
      <Spacer size={2} />
      <Wrapper>
        <Spacer size={3} />
        <BackNav />
        <Spacer size={3} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Logo />
          <Spacer size={2} />
          <MetaText style={{ color: "gray", textAlign: "center" }}>
            You are now talking with Dogge, the furry chatbot!
          </MetaText>
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
              <MetaText style={{ fontSize: 16 }}>
                Did you find Dogge helpful?
              </MetaText>
              <Spacer size={2} />
              <div style={{ display: "flex", gap: 16 }}>
                <PrimaryButton
                  action={() => setSatisfaction(true)}
                  style={
                    satisfaction === true
                      ? {}
                      : satisfaction === false
                      ? { backgroundColor: "#e4e6eb" }
                      : {}
                  }
                >
                  Yes, thank you Dogge!
                </PrimaryButton>
                <SecondaryButton
                  action={() => setSatisfaction(false)}
                  style={
                    satisfaction === false
                      ? {}
                      : satisfaction === true
                      ? { backgroundColor: "#e4e6eb" }
                      : {}
                  }
                >
                  No, but thanks for trying Dogge!
                </SecondaryButton>
              </div>
            </div>
          </div>
        )}
        <Spacer size={5} />
        {satisfaction !== undefined ? (
          <>
            <MessageView
              query={
                satisfaction === true
                  ? "How great! I'm thrilled I could help out! Please come back and talk to me if you are ever in trouble again!"
                  : "I'm sorry I couldn't help you out! Please come back and talk to me if you are ever in trouble again!"
              }
            />
            <Spacer size={5} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Add that data sends when this button is pressed? */}
              <TertiaryButton action={() => navigateTo("/")}>
                Exit chat
              </TertiaryButton>
              <Spacer size={5} />
            </div>
          </>
        ) : null}
      </Wrapper>
      <Spacer size={2} />
    </>
  );
}
