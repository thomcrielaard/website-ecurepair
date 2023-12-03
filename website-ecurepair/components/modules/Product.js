import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "@/styles/modules/Product.module.scss";

import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "../text/Title";
import TextLink from "../text/TextLink";

import Chevron from "@/assets/svg/Chevron";

export default function Product(props) {
  return (
    <div className={styles.ProductContainer}>
      <div className={styles.ProductSideContainer}>
        <div className={styles.ProductImageWrapper}>
          <Image
            className={styles.ProductImage}
            src={API_URL + props.product.afbeelding.data.attributes.url}
            alt={props.product.onderdeelnummer}
            fill
            sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
            placeholder="blur"
            blurDataURL={BlurDataUrl}
          />
        </div>
      </div>
      <div
        className={`${styles.ProductSideContainer} ${styles.ProductTextContainer}`}
      >
        <Title text={props.product.onderdeelnummer} size="lg" />
        <div className={styles.ProductTitleWrapper}>
          {props.product.merks.data.map((brand, key) => (
            <React.Fragment key={key}>
              <Link
                className={styles.ProductQuicklink}
                href={`/onderdelen?merk=${brand.id}`}
              >
                {brand.attributes.naam}
              </Link>
              <Chevron
                width={10}
                color={Colors.LIGHTGRAY}
                style={{ rotate: "-90deg" }}
              />
              <Link
                className={styles.ProductQuicklink}
                href={`/onderdelen?merk=${brand.id}&part=${props.product.onderdeel.data.id}`}
              >
                {props.product.onderdeel.data.attributes.naam}
              </Link>
            </React.Fragment>
          ))}
        </div>
        {/* <div className={styles.ProductPriceWrapper}>
          <span className={styles.ProductPrice}>
            €
            {Number(
              props.discount.ingeschakeld
                ? props.product.prijs -
                    (props.product.prijs * props.discount.procent) / 100
                : props.product.prijs
            ).toFixed(2)}
          </span>
          {props.discount.ingeschakeld && (
            <span className={styles.ProductOldPrice}>
              €{Number(props.product.prijs).toFixed(2)}
            </span>
          )}
        </div> */}
        <div className="content">
          <ReactMarkdown>{props.product.omschrijving}</ReactMarkdown>
        </div>
        <div className={styles.ProductErrorWrapper}>
          <div style={{ alignSelf: "flex-end" }}>
            <Button
              text={"REPARATIEFORMULIER"}
              href="/reparatieformulier"
              color={Colors.WHITE}
              hoverColor={Colors.RED}
              borderColor={Colors.RED}
              hoverBorderColor={Colors.RED}
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
