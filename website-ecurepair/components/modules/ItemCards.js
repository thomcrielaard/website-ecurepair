"use client";
import * as React from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import styles from "@/styles/modules/ItemCards.module.scss";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import { API_URL } from "@/pages/_app";
import Chevron from "@/assets/svg/Chevron";

export default function ItemCards(props) {
  const size = UseDimensions();

  // Enforces onclick listener for pagination
  React.useEffect(() => {
    const handleLinkClick = (event) => {
      const target = event.target.closest("a");
      if (
        target &&
        target.closest(".pagination") &&
        target.getAttribute("href") &&
        target.getAttribute("aria-disabled") !== "true"
      ) {
        // Stop propagation to prevent react-paginate's onClick
        event.stopPropagation();
      }
    };

    document.addEventListener("click", handleLinkClick, true); // Use capture phase

    return () => {
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);

  return (
    <>
      {props.items.length === 0 && (
        <Text
          text="Geen onderdelen gevonden."
          align="center"
          style={{ marginTop: 50 }}
          slim
        />
      )}
      <div className={styles.ItemCardsContainer}>
        {props.items
          .slice(0, props.short ? 4 : props.items.length)
          .map((item, key) => (
            <div key={key} className={styles.ItemCard}>
              <div
                className={`${styles.ItemCardImageWrapper} 
                ${props.square && styles.square}`}
              >
                <Image
                  sizes={`(min-width: ${Breakpoints.lg}) 25vw, (min-width: ${Breakpoints.xs}) 50vw, 100vw`}
                  placeholder="blur"
                  blurDataURL={BlurDataUrl}
                  src={
                    API_URL +
                    (item.onderdeelnummer != undefined
                      ? item.afbeelding
                        ? item.afbeelding.url
                        : item.onderdeel.afbeeldingen
                        ? item.onderdeel.afbeeldingen[0].url
                        : "/uploads/no_image_available_3b34877500.png"
                      : item.omslagfoto.url)
                  }
                  alt={item.onderdeelnummer ?? item.titel}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.ItemCardTextWrapper}>
                <div>
                  <Title
                    text={item.onderdeelnummer ?? item.titel}
                    size="xs"
                    style={{ wordWrap: "break-word" }}
                  />
                  <Text
                    text={item.samenvatting}
                    className={styles.ItemCardText}
                    align="left"
                  />
                </div>
                <div className={styles.ItemCardBottomWrapper}>
                  <Button
                    text="MEER LEZEN"
                    href={
                      item.onderdeelnummer != undefined
                        ? `/onderdelen/${item.onderdeelnummer
                            .replace(/\//g, "%2F")
                            .replace(/ /g, "%20")}`
                        : `/nieuws/${item.titel.replace(" ", "%20")}`
                    }
                    color={Colors.GRAY}
                    hoverColor={Colors.RED}
                    borderColor={Colors.LIGHTGRAY}
                    hoverBorderColor={Colors.RED}
                    small
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      {props.buttonText && (
        <div className={styles.ItemCardButtonWrapper}>
          <Button
            text={props.buttonText}
            href={props.buttonLink}
            color={Colors.GRAY}
            hoverColor={Colors.RED}
            borderColor={Colors.GRAY}
            hoverBorderColor={Colors.RED}
          />
        </div>
      )}
      {!props.short && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <div className={styles.PaginateLabel}>
              <Chevron
                width={12}
                color={Colors.BLACK}
                style={{
                  rotate: "-90deg",
                }}
              />
            </div>
          }
          previousLabel={
            <div className={styles.PaginateLabel}>
              <Chevron
                width={12}
                color={Colors.BLACK}
                style={{
                  rotate: "90deg",
                }}
              />
            </div>
          }
          pageRangeDisplayed={2}
          marginPagesDisplayed={size.width < Breakpoints.xs ? 0 : 1}
          pageCount={props.pageCount}
          initialPage={props.page - 1}
          hrefBuilder={(page) =>
            props.search
              ? `/onderdelen/zoeken/${page}?onderdeel=${props.searchText}&merk=${props.searchMerk}&part=${props.searchPart}`
              : `/onderdelen/pagina/${page}`
          }
          hrefAllControls
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
        />
      )}
    </>
  );
}
