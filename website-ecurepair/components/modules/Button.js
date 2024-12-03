import * as React from "react";
import Link from "next/link";

import styles from "@/styles/modules/Button.module.scss";
import Colors from "@/styles/Colors";

export default function Button(props) {
  const style = {
    "--backgroundColor": props.backgroundColor ?? "transparent",
    "--hoverBackgroundColor":
      props.hoverBackgroundColor ?? props.backgroundColor ?? "transparent",
    "--color": props.color ?? Colors.WHITE,
    "--hoverColor": props.hoverColor ?? Colors.WHITE,
    "--borderColor": props.borderColor ?? Colors.WHITE,
    "--hoverBorderColor": props.hoverBorderColor ?? Colors.WHITE,
    ...props.style,
  };

  return props.isButton ? (
    <button
      className={`hover ${styles.Button} 
      ${props.small && styles.small} 
      ${props.className || ""}`}
      style={style}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  ) : (
    <Link
      href={props.href ?? ""}
      className={`hover ${styles.Button} 
      ${props.small && styles.small} 
      ${props.className || ""}`}
      style={style}
      scroll={props.scroll ?? true}
      target={props.target}
    >
      {props.text}
    </Link>
  );
}
