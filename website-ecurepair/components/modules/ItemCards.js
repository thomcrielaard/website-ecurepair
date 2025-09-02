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
  const itemsPerPage = props.similar ? 4 : props.items.length;

  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(props.pageCount ?? 0);
  const [itemOffset, setItemOffset] = React.useState(0);

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(props.items.slice(itemOffset, endOffset));
    setPageCount(
      props.pageCount ?? Math.ceil(props.items.length / itemsPerPage)
    );
  }, [itemOffset, props.items, itemsPerPage, props.pageCount]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % props.items.length;
    setItemOffset(newOffset);
  };

  if (props.similar) {
    // Custom rendering for similar products with pagination
    return (
      <>
        {props.items.length === 0 && (
          <Text
            text="Geen vergelijkbare producten gevonden."
            align="left"
            style={{ marginTop: 20 }}
            slim
          />
        )}
        <div className={styles.ItemCardsContainer}>
          {currentItems.map((item, key) => (
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
                        : "/uploads/no_image_available_260ccf02f5.png"
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
        <ReactPaginate
          breakLabel={
            <span aria-label="Meer pagina's" tabIndex={0}>
              ...
            </span>
          }
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
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={size.width < Breakpoints.xs ? 0 : 1}
          pageCount={pageCount}
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
          ariaLabelBuilder={(page) => `Ga naar pagina ${page}`}
          nextAriaLabel="Volgende pagina"
          previousAriaLabel="Vorige pagina"
          breakAriaLabels={"Meer pagina's"}
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
        />
      </>
    );
  }

  // Default behavior
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
                        : "/uploads/no_image_available_260ccf02f5.png"
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

      <ReactPaginate
        breakLabel={
          <span aria-label="Meer pagina's" tabIndex={0}>
            ...
          </span>
        }
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
        hrefBuilder={(page) => `/onderdelen/pagina/${page}`}
        hrefAllControls
        onPageChange={(event) => {
          const page = event.selected + 1;
          // Only navigate on click, not on initial render
          if (typeof window !== "undefined") {
            window.location.href = `/onderdelen/pagina/${page}`;
          }
        }}
        pageRangeDisplayed={2}
        marginPagesDisplayed={size.width < Breakpoints.xs ? 0 : 1}
        pageCount={pageCount}
        forcePage={(props.page ?? 1) - 1}
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
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        ariaLabelBuilder={(page) => `Ga naar pagina ${page}`}
        nextAriaLabel="Volgende pagina"
        previousAriaLabel="Vorige pagina"
        breakAriaLabels={"Meer pagina's"}
        activeClassName={styles.active}
      />
    </>
  );
}
