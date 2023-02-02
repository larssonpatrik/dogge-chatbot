import React from "react";
import "./Typography.css";

const time = new Date();
let hours = time.getHours().toString();
let minutes =
  time.getMinutes().toString().length < 2
    ? "0" + time.getMinutes().toString()
    : time.getMinutes().toString();

export function MessageText(props) {
  return (
    <p className="message-text" style={{ ...props.style }}>
      {props.children}
    </p>
  );
}

export function TimeText(props) {
  return (
    <p className="time-text" style={{ ...props.style }}>
      {hours + ":" + minutes}
    </p>
  );
}

export function MetaText(props) {
  return (
    <p className="meta-text" style={{ ...props.style }}>
      {props.children}
    </p>
  );
}

export function TitleText(props) {
  return <h1 className="title-text">{props.children}</h1>;
}

export function SubTitleText(props) {
  return <h2 className="subtitle-text">{props.children}</h2>;
}
