import * as React from "react";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

export default function Text(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent:
          props.align == undefined
            ? "center"
            : props.align == "left"
            ? "flex-start"
            : props.align == "right"
            ? "flex-end"
            : "center",
      }}
    >
      <div style={{ maxWidth: props.slim ? 750 : 1000 }}>
        <p
          style={{
            fontSize: props.fontSize ?? 18,
            color: props.color ?? Colors.GRAY,
            fontFamily: "lato",
            fontWeight: 600,
            whiteSpace: "pre-wrap",
            lineHeight: props.lineHeight ?? 1.5,
            textAlign:
              props.align ?? (size.width < Breakpoints.sm ? "center" : "left"),
            ...props.style,
          }}
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      </div>
    </div>
  );
}
