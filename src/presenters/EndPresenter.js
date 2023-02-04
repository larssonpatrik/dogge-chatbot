import React from "react";
import { useParams } from "react-router-dom";
import { MetaText } from "../components/Typography";
import Wrapper from "../components/Wrapper";
import Spacer from "../components/Spacer";

export default function EndPresenter(props) {
  const { state } = useParams();
  return (
    <>
      <Wrapper>
        <MetaText>{state}</MetaText>
      </Wrapper>
      <Spacer size={2} />
    </>
  );
}
