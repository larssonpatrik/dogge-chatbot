import React from "react";
import "./Buttons.css";

export function PrimaryButton(props) {
  return (
    <button
      className="base-button primary-button"
      onClick={props.action}
      style={{ ...props.style }}
    >
      {props.children}
    </button>
  );
}

export function SecondaryButton(props) {
  return (
    <button
      className="base-button secondary-button"
      onClick={props.action}
      style={{ ...props.style }}
    >
      {props.children}
    </button>
  );
}

export function TertiaryButton(props) {
  return (
    <button
      className="base-button tertiary-button"
      onClick={props.action}
      style={{ ...props.style }}
    >
      {props.children}
    </button>
  );
}
