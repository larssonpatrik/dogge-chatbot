import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MetaText } from "./Typography";

export function BackNav() {
  return (
    <Link style={{ color: "#dc9950", textDecoration: "none" }} to="/">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <BiChevronLeft size={36} />
        <MetaText style={{ padding: 0, fontSize: 16 }}>Back</MetaText>
      </div>
    </Link>
  );
}
