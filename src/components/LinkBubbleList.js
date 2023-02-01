import React from "react";
import Bubble from "./Bubble";
import Spacer from "./Spacer";

// Should function with multiple links
// props.links = list of objects containing links and labels
export default function LinkBubbleList(props) {
  return props.links.map((linkObj) => {
    return (
      <div>
        <Spacer size={1} />
        <Bubble>
          <a
            style={{ color: "black", fontWeight: 500 }}
            href={linkObj.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkObj.label}
          </a>
        </Bubble>
      </div>
    );
  });
}
