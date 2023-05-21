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
        id={props.id}
      >
        <div
          style={{
            padding:
              props.padding ??
              (size.width < Breakpoints.sm
                ? `${props.paddingVert ?? "4rem"} 2rem`
                : size.width < Breakpoints.md
                ? `${props.paddingVert ?? "4rem"} 4rem`
                : `${props.paddingVert ?? "4rem"} 8rem`),
            width: "100%",
            maxWidth: 2000,
            ...props.innerStyle,
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
