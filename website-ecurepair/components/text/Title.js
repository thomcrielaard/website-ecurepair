import * as React from "react";

import styles from "@/styles/text/Title.module.scss";

export default function Title(props) {
  return (
    <>
      {props.h1 ? (
        <h1
          className={`
        ${styles.Title} 
        ${styles[props.size]} 
        ${styles[props.align] || ""} 
        ${props.className || ""}`}
          style={{
            color: props.color,
            ...props.style,
          }}
          onClick={props.onClick}
        >
          {props.text}
        </h1>
      ) : (
        <h2
          className={`
        ${styles.Title} 
        ${styles[props.size]} 
        ${styles[props.align] || ""} 
        ${props.className || ""}`}
          style={{
            color: props.color,
            ...props.style,
          }}
          onClick={props.onClick}
        >
          {props.text}
        </h2>
      )}
      {props.underline && (
        <div
          className={`${styles.TitleBarContainer} 
          ${styles[props.align] || ""}
          ${props.containerClassName || ""}`}
        >
          <div className={styles.TitleBar} />
        </div>
      )}
    </>
  );
}
