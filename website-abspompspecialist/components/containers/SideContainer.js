import * as React from "react";

import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "../../styles/Breakpoints";

export default function SideContainer(props) {
  const size = UseDimensions();

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection:
            size.width < Breakpoints.sm
              ? props.reverse
                ? "column-reverse"
                : "column"
              : "row",
          justifyContent: "space-between",
          alignItems: props.alignTop ? "flex-start" : "center",
          gap: 50,
          ...props.style,
        }}
      >
        <div
          style={{
            width:
              size.width < Breakpoints.sm
                ? "100%"
                : props.contentLeft
                ? "63%"
                : props.contentRight
                ? "33%"
                : "48%",
          }}
        >
          {props.left}
        </div>
        <div
          style={{
            width:
              size.width < Breakpoints.sm
                ? "100%"
                : props.contentLeft
                ? "33%"
                : props.contentRight
                ? "63%"
                : "48%",
          }}
        >
          {props.right}
        </div>
      </div>
    </>
  );
}
