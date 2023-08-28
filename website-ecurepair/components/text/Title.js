import * as React from "react";

import styles from "@/styles/text/Title.module.scss";

export default function Title(props) {
  return (
    <>
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
      >
        {props.text}
      </h1>
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
