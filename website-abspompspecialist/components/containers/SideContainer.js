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
          flexDirection: size.width < Breakpoints.sm ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width:
              size.width < Breakpoints.sm
                ? "90%"
                : props.contentLeft
                ? "65%"
                : props.contentRight
                ? "35%"
                : "50%",
          }}
        >
          {props.resizeFlipped && size.width < Breakpoints.sm
            ? props.right
            : props.left}
        </div>
        <div
          style={{
            width:
              size.width < Breakpoints.sm
                ? "90%"
                : props.contentLeft
                ? "35%"
                : props.contentRight
                ? "65%"
                : "50%",
          }}
        >
          {props.resizeFlipped && size.width < Breakpoints.sm
            ? props.left
            : props.right}
        </div>
      </div>
    </>
  );
}
