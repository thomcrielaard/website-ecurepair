import * as React from "react";
import { twMerge } from "tailwind-merge";

// Variant table: responsive font size per `size` prop (SCSS breakpoints 768/1200/1400
// mapped to md:/xl:/2xl:).
const SIZES = {
  xxs: "text-[1.1em] md:text-[1.2em] xl:text-[1.25em]",
  xs: "text-[1.1em] md:text-[1.2em] xl:text-[1.3em] 2xl:text-[1.4em]",
  sm: "text-[1.4em] md:text-[1.5em]",
  md: "text-[1.5em] md:text-[1.6em] xl:text-[1.75em] 2xl:text-[2em]",
  lg: "text-[1.75em] md:text-[2.1em] xl:text-[2.25em] 2xl:text-[2.5em]",
  xl: "text-[2.5em] md:text-[2.75em] 2xl:text-[3em]",
};

export default function Title(props) {
  const className = twMerge(
    `m-0 font-[family-name:lato] font-bold whitespace-pre-wrap text-gray ${
      props.align === "center" ? "text-center" : "text-left"
    } ${SIZES[props.size] ?? ""}`,
    props.className,
  );

  return (
    <>
      {props.h1 ? (
        <h1 className={className} style={props.style} onClick={props.onClick}>
          {props.children ?? props.text}
        </h1>
      ) : (
        <h2 className={className} style={props.style} onClick={props.onClick}>
          {props.children ?? props.text}
        </h2>
      )}
      {props.underline && (
        <div
          className={twMerge(
            `flex ${props.align === "left" ? "justify-start" : "justify-center"}`,
            props.containerClassName,
          )}
        >
          <div className="my-3.75 h-1 w-31.25 bg-red" />
        </div>
      )}
    </>
  );
}
