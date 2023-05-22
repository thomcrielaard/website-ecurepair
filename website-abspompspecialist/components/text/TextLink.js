import * as React from "react";
import Link from "next/link";

import Colors from "@/styles/Colors";

export default function TextLink(props) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => props.onClick && props.onClick()}
    >
      <Link
        href={props.href}
        target={props.target ?? ""}
        style={{
          color: hover ? props.hoverColor : props.color,
          fontSize: props.fontSize ?? "1rem",
          fontWeight: props.fontWeight ?? "normal",
          fontFamily: props.fontFamily,
          letterSpacing: props.letterSpacing,
          transition: ".3s ease-in-out",
          ...props.style,
        }}
        onClick={props.onClick}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          {props.bar && (
            <div
              style={{
                height: props.fontSize,
                width: 2.5,
                marginTop: 2,
                backgroundColor: Colors.RED,
              }}
            />
          )}
          {props.text}
        </div>
      </Link>
    </div>
  );
}
