import React from "react";

const SIZES = [4, 8, 16, 24, 32, 40];

export default function Spacer(props) {
  return (
    <div style={{ height: SIZES[props.size], width: SIZES[props.size] }}></div>
  );
}
