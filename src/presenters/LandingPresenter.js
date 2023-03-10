import React from "react";
import Wrapper from "../components/Wrapper";
import Spacer from "../components/Spacer";
import { MetaText, SubTitleText, TitleText } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function LandingPresenter() {
  return (
    <>
      <Spacer size={2} />
      <Wrapper
        className="flex-center-vertical"
        style={{ minHeight: "95vh", borderRadius: "18px 18px 0 0" }}
      >
        <Spacer size={5} />
        <Logo size="big" />
        <Spacer size={5} />
        <TitleText>Dogge</TitleText>
        <Spacer size={1} />
        <SubTitleText>
          A lost Media Technology students' best friend!
        </SubTitleText>
        <Spacer size={4} />

        <MetaText
          style={{
            maxWidth: 750,
            textAlign: "center",
            color: "gray",
            padding: 0,
          }}
        >
          This chatbot is part of a Bachelor Thesis project produced by Patrik
          Larsson and Samuel Ribaric. The intended use is to supplement
          programming lab sessions to ease the TA's workload as well as
          shortening queue times for students in need of help.
        </MetaText>
        <Spacer size={4} />
        <Link to="/chat">
          <PrimaryButton>Let's get talking!</PrimaryButton>
        </Link>
      </Wrapper>
      <Wrapper
        className="flex-center-vertical"
        style={{ minHeight: "5vh", borderRadius: "0 0 18px 18px" }}
      >
        <MetaText>Developed by Patrik Larsson & Samuel Ribaric 2023</MetaText>
      </Wrapper>
      <Spacer size={2} />
    </>
  );
}
