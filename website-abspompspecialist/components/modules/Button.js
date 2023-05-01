import * as React from "react";
import Link from "next/link";

import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Colors from "../../styles/Colors";

export default function Button(props) {
  const size = UseDimensions();
  const [hover, setHover] = React.useState(false);

  return (
    <Link
      className="hover"
      href={props.href ?? ""}
      style={{
        backgroundColor:
          props.backgroundColor != undefined
            ? hover
              ? props.hoverBackgroundColor ?? props.backgroundColor
              : props.backgroundColor
            : "transparent",
        border: `2px solid ${
          hover
            ? props.hoverBorderColor ?? props.borderColor ?? Colors.WHITE
            : props.borderColor ?? Colors.WHITE
        }`,
        color:
          props.color != undefined
            ? hover
              ? `${props.hoverColor ?? props.color}${
                  props.disabled ? "50" : ""
                }`
              : `${props.color}${props.disabled ? "50" : ""}`
            : Colors.WHITE,
        fontFamily: "poppins",
        fontWeight: 500,
        fontSize: "1em",
        letterSpacing: size.width < Breakpoints.sm ? 3 : 5,
        transition: ".3s ease-in-out",
        cursor: hover ? "pointer" : "auto",
        padding: "10px 25px",
        ...props.style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.text}
    </Link>
  );
}
