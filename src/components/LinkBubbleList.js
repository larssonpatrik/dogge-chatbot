import React from "react";
import Bubble from "./Bubble";
import Spacer from "./Spacer";
import { MetaText, SubTitleText } from "./Typography";
import "./LinkBubbleList.css";

// Should function with multiple links
// props.links = list of objects containing links and labels
export default function LinkBubbleList(props) {
  const screenWidth = window.innerWidth;

  return props.links.map((linkObj) => {
    return (
      <div>
        <Spacer size={1} />
        <Bubble style={{ padding: 12 }}>
          <a
            href={linkObj.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="link-container">
              <img
                className="link-img"
                src="https://i.ibb.co/N6LKKxb/1-1-Thumb.png"
                alt="0"
              />
              <Spacer size={2} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <SubTitleText
                  style={{
                    fontSize: screenWidth < 500 ? 16 : 18,
                    textAlign: "left",
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  {linkObj.label}
                </SubTitleText>
                <Spacer size={0} />
                <p
                  style={{
                    color: "gray",
                    fontSize: screenWidth < 500 ? 12 : 14,
                    textAlign: "left",
                  }}
                >
                  W3Schools.com
                </p>
              </div>
            </div>
          </a>
        </Bubble>
      </div>
    );
  });
}
