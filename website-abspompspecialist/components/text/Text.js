import * as React from "react";

import styles from "@/styles/text/Text.module.scss";

export default function Text(props) {
  return (
    <div
      className={`${styles.TextContainer} ${styles[props.align] || ""}`}
      ref={props.forwardRef}
    >
      <div className={props.slim ? styles.TextWrapperSlim : styles.TextWrapper}>
        <p
          className={styles.Text}
          style={{
            fontSize: props.fontSize,
            color: props.color,
            lineHeight: props.lineHeight,
            ...props.style,
          }}
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      </div>
    </div>
  );
}
