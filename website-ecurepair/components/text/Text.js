import * as React from "react";
import { twMerge } from "tailwind-merge";

export default function Text(props) {
  const className = twMerge(
    `text-lg leading-normal text-gray font-[family-name:lato] font-semibold whitespace-pre-wrap ${
      props.align === "left"
        ? "text-left"
        : props.align === "center"
          ? "text-center"
          : props.align === "right"
            ? "text-right"
            : "text-center md:text-left"
    }`,
    props.className,
  );

  const style = {
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    ...props.style,
  };

  return (
    <div
      className={`flex w-full ${
        props.align === "left"
          ? "justify-start"
          : props.align === "right"
            ? "justify-end"
            : "justify-center"
      }`}
      ref={props.forwardRef}
    >
      <div className={props.slim ? "max-w-187.5" : "max-w-250"}>
        {props.children ? (
          <p className={className} style={style}>
            {props.children}
          </p>
        ) : (
          <p
            className={className}
            style={style}
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        )}
      </div>
    </div>
  );
}
