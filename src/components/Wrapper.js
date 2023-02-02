import React from "react";
import "./Wrapper.css";

export default function Wrapper(props) {
  return (
    <div className={props.className + " wrapper"} style={{ ...props.style }}>
      {props.children}
    </div>
  );
}
