import * as React from "react";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import styles from "@/styles/modules/NewsItem.module.scss";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";

import Title from "../text/Title";
import Image from "next/image";

export default function NewsItem(props) {
  return (
    <div className={styles.NewsItemContainer}>
      <div className={styles.NewsItemWrapper}>
        {props.item.bericht.map((content, key) => (
          <div key={key}>
            {content.text != undefined ? (
              <ReactMarkdown>{content.text}</ReactMarkdown>
            ) : (
              <div className={styles.NewsItemImageWrapper}>
                <Image
                  src={API_URL + content.afbeelding.url}
                  alt={props.item.titel}
                  style={{ objectFit: "cover" }}
                  fill
                  sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
                  placeholder="blur"
                  blurDataURL={BlurDataUrl}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
