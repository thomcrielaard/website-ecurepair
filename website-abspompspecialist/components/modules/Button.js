import * as React from "react";
import Link from "next/link";

import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Colors from "@/styles/Colors";

export default function Button(props) {
  const size = UseDimensions();
  const [hover, setHover] = React.useState(false);

  return props.isButton ? (
    <button
      className="hover"
      style={{
        width: "fit-content",
        backgroundColor:
          props.backgroundColor != undefined
            ? hover
              ? props.hoverBackgroundColor ?? props.backgroundColor
              : props.backgroundColor
            : "transparent",
        border: `1px solid ${
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
        fontSize: props.small ? 12 : "1em",
        letterSpacing: props.small ? 2 : size.width < Breakpoints.sm ? 3 : 5,
        transition: ".3s ease-in-out",
        padding: props.small ? "5px 15px" : "10px 25px",
        textAlign: "center",
        border: 0,
        ...props.style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      scroll={props.scroll ?? true}
    >
      {props.text}
    </button>
  ) : (
    <Link
      className="hover"
      href={props.href ?? ""}
      style={{
        width: "fit-content",
        backgroundColor:
          props.backgroundColor != undefined
            ? hover
              ? props.hoverBackgroundColor ?? props.backgroundColor
              : props.backgroundColor
            : "transparent",
        border: `1px solid ${
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
        fontSize: props.small ? 12 : "1em",
        letterSpacing: props.small ? 2 : size.width < Breakpoints.sm ? 3 : 5,
        transition: ".3s ease-in-out",
        padding: props.small ? "5px 15px" : "10px 25px",
        textAlign: "center",
        ...props.style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      scroll={props.scroll ?? true}
    >
      {props.text}
    </Link>
  );
}
