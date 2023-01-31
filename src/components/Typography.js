import React from "react";
import "./Typography.css";

export function MessageText(props) {
  return <p className="message-text">{props.children}</p>;
}

export function TimeText(props) {
  return <p className="time-text">{props.children}</p>;
}

export function MetaText(props) {
  return <p className="meta-text">{props.children}</p>;
}
