import * as React from "react";

import styles from "@/styles/containers/Container.module.scss";

import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "../../styles/Breakpoints";

export default function Container(props) {
  const size = UseDimensions();

  return (
    <>
      <div
        className={`${styles.ContainerWrapper} ${props.className}`}
        style={{
          backgroundColor: props.backgroundColor,
          ...props.style,
        }}
        id={props.id}
      >
        <div
          className={`${styles.Container} ${props.innerClassName}`}
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
