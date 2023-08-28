import * as React from "react";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import styles from "@/styles/modules/ErrorDescription.module.scss";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";

import Title from "../text/Title";
import Image from "next/image";

export default function ErrorDescription(props) {
  return (
    <div className={styles.ErrorDescriptionContainer}>
      <div className={styles.ErrorDescriptionWrapper}>
        <div className={styles.ErrorDescriptionImageWrapper}>
          <Image
            src={API_URL + props.error.afbeelding.data.attributes.url}
            alt={props.error.titel}
            style={{ objectFit: "cover" }}
            fill
            sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
            placeholder="blur"
            blurDataURL={BlurDataUrl}
          />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          {props.error.foutcodes.data.length > 0 && (
            <div>
              <Title
                text="MOGELIJKE FOUTCODES"
                size="xs"
                style={{ marginBottom: 10 }}
              />
              {props.error.foutcodes.data.map((foutcode, key) => (
                <span className={styles.ErrorDescriptionCode} key={key}>
                  {foutcode.attributes.foutcode}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={`${styles.ErrorDescriptionWrapper} 
        ${styles.ErrorDescriptionContentWrapper}`}
      >
        <Title text={props.error.titel} size="lg" />
        <div className="content">
          <ReactMarkdown>{props.error.omschrijving}</ReactMarkdown>
        </div>
        <div className={styles.ErrorDescriptionButtonWrapper}>
          <Button
            text={"AFSPRAAK MAKEN"}
            href="/contact"
            color={Colors.WHITE}
            hoverColor={Colors.RED}
            borderColor={Colors.RED}
            backgroundColor={Colors.RED}
            hoverBackgroundColor={Colors.WHITE}
          />
        </div>
      </div>
    </div>
  );
}
