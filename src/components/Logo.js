import React from "react";
import logo from "../assets/Dogge_1.png";

export default function Logo(props) {
  return (
    <img
      src={logo}
      style={
        props.size === "big"
          ? { width: 250, height: "auto" }
          : { width: 150, height: "auto" }
      }
      alt="Dogge looking all happy!"
    />
  );
}
