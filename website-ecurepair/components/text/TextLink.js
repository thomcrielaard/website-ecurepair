import * as React from "react";
import Link from "next/link";

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
        target={props.target}
        className={`text-base font-normal transition-all duration-300 ease-in-out ${props.className || ""}`}
        style={{
          color: hover ? props.hoverColor : props.color,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          ...props.style,
        }}
        onClick={props.onClick}
      >
        <div className="flex items-center gap-2">
          {props.bar && <div className="w-0.5 self-stretch bg-red" />}
          {props.text}
        </div>
      </Link>
    </div>
  );
}
