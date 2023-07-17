import * as React from "react";
import Link from "next/link";

import styles from "@/styles/text/TextLink.module.scss";

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
        className={`${styles.TextLink} ${props.className || ""}`}
        style={{
          color: hover ? props.hoverColor : props.color,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          ...props.style,
        }}
        onClick={props.onClick}
      >
        <div className={styles.TextLinkBarContainer}>
          {props.bar && <div className={styles.TextLinkBar} />}
          {props.text}
        </div>
      </Link>
    </div>
  );
}
