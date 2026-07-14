import * as React from "react";

// TODO: Remove style prop
export default function Container(props) {
  return (
    <>
      <div
        className={`flex justify-center w-full 
        ${props.className || ""}`}
        style={{
          backgroundColor: props.backgroundColor,
          ...props.style,
        }}
        id={props.id}
      >
        <div
          className={`max-w-500 w-full px-8 md:px-16 lg:px-32 py-16 
          ${props.innerClassName || ""}`}
          style={{
            paddingTop: props.paddingVert ?? props.padding,
            paddingBottom: props.paddingVert ?? props.padding,
            paddingLeft: props.padding,
            paddingRight: props.padding,
            ...props.innerStyle,
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
