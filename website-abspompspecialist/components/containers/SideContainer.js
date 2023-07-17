import * as React from "react";

import styles from "@/styles/containers/SideContainer.module.scss";

export default function SideContainer(props) {
  return (
    <>
      <div
        className={`${styles.SideContainer} 
        ${props.reverse ? styles.SideContainerReverse : ""} 
        ${props.contentRight ? styles.SideContainerContentRight : ""} 
        ${props.contentLeft ? styles.SideContainerContentLeft : ""}
        ${props.alignTop ? styles.SideContainerAlignTop : ""}`}
        style={{
          ...props.style,
        }}
      >
        <div className={styles.SideContainerLeft}>{props.left}</div>
        <div className={styles.SideContainerRight}>{props.right}</div>
      </div>
    </>
  );
}
