import * as React from "react";

export default function SideContainer(props) {
  return (
    <div
      className={`flex w-full justify-between ${
        props.alignTop ? "items-start" : "items-center"
      } ${props.reverse ? "flex-col-reverse" : "flex-col"} md:flex-row`}
      style={props.style}
    >
      <div
        className={`w-full ${
          props.contentLeft
            ? "md:w-[63%]"
            : props.contentRight
              ? "md:w-[33%]"
              : "md:w-[48%]"
        }`}
      >
        {props.left}
      </div>
      <div
        className={`w-full ${
          props.contentLeft
            ? "md:w-[33%]"
            : props.contentRight
              ? "md:w-[63%]"
              : "md:w-[48%]"
        }`}
      >
        {props.right}
      </div>
    </div>
  );
}
