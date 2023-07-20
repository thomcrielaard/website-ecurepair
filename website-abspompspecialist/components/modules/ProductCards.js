import * as React from "react";
import Image from "next/image";

import styles from "@/styles/modules/ProductCards.module.scss";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import { API_URL } from "@/pages/_app";
import ReactPaginate from "react-paginate";
import Chevron from "@/assets/svg/Chevron";

export default function ProductCards(props) {
  const size = UseDimensions();
  const itemsPerPage = 8;

  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(props.items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.items.length / itemsPerPage));
  }, [itemOffset, props.items, size.width, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % props.items.length;
    setItemOffset(newOffset);
  };

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
      <div className={styles.ProductCardsContainer}>
        {currentItems
          .slice(0, props.short ? 4 : props.items.length)
          .map((item, key) => (
            <div key={key} className={styles.ProductCard}>
              <div
                className={`${styles.ProductCardImageWrapper} 
                ${props.square && styles.square}`}
              >
                <Image
                  sizes={`(min-width: ${Breakpoints.lg}) 25vw, (min-width: ${Breakpoints.xs}) 50vw, 100vw`}
                  placeholder="blur"
                  blurDataURL={BlurDataUrl}
                  src={
                    item.attributes.type
                      ? API_URL +
                        item.attributes.type.data.attributes.afbeelding.data
                          .attributes.url
                      : API_URL + item.attributes.afbeelding.data.attributes.url
                  }
                  alt={item.attributes.onderdeelnummer ?? item.attributes.titel}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.ProductCardTextWrapper}>
                <div>
                  <Title
                    text={
                      item.attributes.onderdeelnummer ?? item.attributes.titel
                    }
                    size="xs"
                    style={{ wordWrap: "break-word" }}
                  />
                  <Text
                    text={item.attributes.samenvatting}
                    className={styles.ProductCardText}
                    align="left"
                  />
                </div>
                <div className={styles.ProductCardBottomWrapper}>
                  <Button
                    text="MEER LEZEN"
                    href={
                      item.attributes.onderdeelnummer != undefined
                        ? `/reparaties/${item.attributes.onderdeelnummer}`
                        : `/fouten/${item.attributes.titel}`
                    }
                    color={Colors.GRAY}
                    hoverColor={Colors.RED}
                    borderColor={Colors.LIGHTGRAY}
                    hoverBorderColor={Colors.RED}
                    small
                  />
                  {props.price && (
                    <div className={styles.ProductCardPriceWrapper}>
                      <span
                        className={
                          props.discount.ingeschakeld
                            ? styles.ProductCardDiscountPrice
                            : styles.ProductCardPrice
                        }
                      >
                        €{Number(item.attributes.prijs).toFixed(2)}
                      </span>
                      {props.discount.ingeschakeld && (
                        <span className={styles.ProductCardPrice}>
                          €
                          {Number(
                            item.attributes.prijs -
                              (item.attributes.prijs * props.discount.procent) /
                                100
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {props.buttonText && (
        <div className={styles.ProductCardButtonWrapper}>
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
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
        />
      )}
    </>
  );
}
