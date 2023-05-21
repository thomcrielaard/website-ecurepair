import * as React from "react";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Colors from "@/styles/Colors";

function calculateTitleFontSize(size, width) {
  switch (size) {
    case "xxs":
      return width < Breakpoints.sm
        ? "1.1em"
        : width < Breakpoints.lg
        ? "1.2em"
        : "1.25em";
    case "xs":
      return width < Breakpoints.sm
        ? "1.1em"
        : width < Breakpoints.lg
        ? "1.2em"
        : width < Breakpoints.xl
        ? "1.3em"
        : "1.4em";
    case "sm":
    case "xs":
      return width < Breakpoints.sm ? "1.4em" : "1.5em";
    case "md":
      return width < Breakpoints.sm
        ? "1.5em"
        : width < Breakpoints.lg
        ? "1.6em"
        : width < Breakpoints.xl
        ? "1.75em"
        : "2em";
    case "lg":
      return width < Breakpoints.sm
        ? "2em"
        : width < Breakpoints.lg
        ? "2.1em"
        : width < Breakpoints.xl
        ? "2.25em"
        : "2.5em";
    case "xl":
      return width < Breakpoints.sm
        ? "2.5em"
        : width < Breakpoints.xl
        ? "2.75em"
        : "3em";
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
            justifyContent: props.align === "left" ? "flex-start" : "center",
          }}
        >
          <div
            style={{
              width: props.underlineSize ?? 125,
              height: 4,
              backgroundColor: props.underlineColor ?? Colors.RED,
              margin: "15px 0",
              ...props.underlineStyle,
            }}
          />
        </div>
      )}
    </>
  );
}
