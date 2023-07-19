import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "@/styles/modules/AbsDescription.module.scss";

import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "../text/Title";
import TextLink from "../text/TextLink";

import Chevron from "@/assets/svg/Chevron";

export default function AbsDescription(props) {
  return (
    <div className={styles.AbsDescriptionContainer}>
      <div className={styles.AbsDescriptionSideContainer}>
        <div className={styles.AbsDescriptionImageWrapper}>
          <Image
            className={styles.AbsDescriptionImage}
            src={
              API_URL +
              props.abs.type.data.attributes.afbeelding.data.attributes.url
            }
            alt={props.abs.onderdeelnummer}
            fill
            sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
            placeholder="blur"
            blurDataURL={BlurDataUrl}
          />
        </div>
      </div>
      <div
        className={`${styles.AbsDescriptionSideContainer} ${styles.AbsDescriptionTextContainer}`}
      >
        <Title text={props.abs.onderdeelnummer} size="lg" />
        <div className={styles.AbsDescriptionTitleWrapper}>
          <Link
            className={styles.AbsDescriptionQuicklink}
            href={`/reparaties?merk=${props.abs.merk.data.id}`}
          >
            {props.abs.merk.data.attributes.naam}
          </Link>
          <Chevron
            width={10}
            color={Colors.LIGHTGRAY}
            style={{ rotate: "-90deg" }}
          />
          <Link
            className={styles.AbsDescriptionQuicklink}
            href={`/reparaties?merk=${props.abs.merk.data.id}&type=${props.abs.type.data.id}`}
          >
            {props.abs.type.data.attributes.naam}
          </Link>
        </div>
        <div className={styles.AbsDescriptionPriceWrapper}>
          <span className={styles.AbsDescriptionPrice}>
            €
            {Number(
              props.discount.ingeschakeld
                ? props.abs.prijs -
                    (props.abs.prijs * props.discount.procent) / 100
                : props.abs.prijs
            ).toFixed(2)}
          </span>
          {props.discount.ingeschakeld && (
            <span className={styles.AbsDescriptionOldPrice}>
              €{Number(props.abs.prijs).toFixed(2)}
            </span>
          )}
        </div>
        <div className="content">
          <ReactMarkdown>{props.abs.omschrijving}</ReactMarkdown>
        </div>
        <div className={styles.AbsDescriptionErrorWrapper}>
          {props.abs.merk.data.attributes.foutcodes.data.length > 0 && (
            <div>
              <Title
                text="MOGELIJKE FOUTCODES"
                size="xs"
                style={{ marginBottom: 10 }}
              />
              {props.abs.merk.data.attributes.foutcodes.data.map((foutcode) => {
                if (foutcode.attributes.foutomschrijving.data != null)
                  return (
                    <TextLink
                      href={`/fouten/${foutcode.attributes.foutomschrijving.data.attributes.titel}`}
                      text={foutcode.attributes.foutcode}
                      className={`${styles.AbsDescriptionError} ${styles.AbsDescriptionErrorLink}`}
                    />
                  );
                else
                  return (
                    <span className={styles.AbsDescriptionError}>
                      {foutcode.attributes.foutcode}
                    </span>
                  );
              })}
            </div>
          )}
          <div style={{ alignSelf: "flex-end" }}>
            <Button
              text={"REPARATIEFORMULIER"}
              href="/reparatieformulier"
              color={Colors.WHITE}
              hoverColor={Colors.RED}
              borderColor={Colors.RED}
              backgroundColor={Colors.RED}
              hoverBackgroundColor={Colors.WHITE}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
