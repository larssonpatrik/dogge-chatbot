import React from "react";
import { useParams } from "react-router-dom";
import { MetaText } from "../components/Typography";
import Wrapper from "../components/Wrapper";
import Spacer from "../components/Spacer";
import Logo from "../components/Logo";

export default function EndPresenter(props) {
  const { state } = useParams();
  if (state === "true") {
    return (
      <>
        <Spacer size={2} />
        <Wrapper>
          <Spacer size={3} />
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
            <MetaText style={{ textAlign: "center" }}>
              How great! I'm thrilled I could help out!
            </MetaText>
          </div>
        </Wrapper>
        <Spacer size={2} />
      </>
    );
  } else {
    return (
      <>
        <Wrapper>
          <MetaText>I'm sorry I couldn't help you out!</MetaText>
        </Wrapper>
        <Spacer size={2} />
      </>
    );
  }
}
