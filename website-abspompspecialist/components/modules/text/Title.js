import * as React from "react";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Colors from "@/styles/Colors";

function calculateTitleFontSize(size, width) {
  switch (size) {
    case "md":
      return width < Breakpoints.sm
        ? "1.5em"
        : width < Breakpoints.lg
        ? "1.6em"
        : width < Breakpoints.xl
        ? "1.75em"
        : "2em";
    // case "lg":
    //   return width < Breakpoints.sm
    //     ? "2.25em"
    //     : width < Breakpoints.lg
    //     ? "2.75em"
    //     : "3.5em";
    // case "xl":
    //   return width < Breakpoints.xs
    //     ? "2.5em"
    //     : width < Breakpoints.lg
    //     ? "3.5em"
    //     : "4.5em";
  }
}

export default function Title(props) {
  const size = UseDimensions();

  return (
    <>
      <h1
        style={{
          color: props.color ?? Colors.GRAY,
          fontSize:
            props.fontSize ?? calculateTitleFontSize(props.size, size.width),
          fontWeight: 700,
          fontFamily: "lato",
          textAlign: props.align ?? "left",
          whiteSpace: "pre-wrap",
          margin: 0,
          ...props.style,
        }}
      >
        {props.text}
      </h1>
      {props.underline && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: props.underlineSize ?? 125,
            height: 4,
            backgroundColor: props.underlineColor ?? Colors.BLUE,
            margin: "15px 0",
            ...props.underlineStyle,
          }}
        />
      )}
    </>
  );
}
