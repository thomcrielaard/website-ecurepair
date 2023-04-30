import * as React from "react";

import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "../../styles/Breakpoints";

export default function Container(props) {
  const size = UseDimensions();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: props.backgroundColor,
          width: "100%",
          ...props.style,
        }}
      >
        <div
          style={{
            padding:
              props.padding ??
              (size.width < Breakpoints.sm
                ? "4rem 1rem"
                : size.width < Breakpoints.md
                ? "4rem 2rem"
                : "4rem"),
            width: "100%",
            maxWidth: 2000,
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
