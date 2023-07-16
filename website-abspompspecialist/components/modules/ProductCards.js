import * as React from "react";
import Image from "next/image";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            size.width < Breakpoints.xs
              ? "1fr"
              : size.width < Breakpoints.lg
              ? "1fr 1fr"
              : "1fr 1fr 1fr 1fr",
          width: "100%",
          margin: "40px 0",
          gap: `${
            size.width < Breakpoints.xs
              ? "30px"
              : size.width < Breakpoints.lg
              ? "40px"
              : "50px"
          } 4%`,
        }}
      >
        {currentItems
          .slice(0, props.short ? 4 : props.items.length)
          .map((item, key) => (
            <div
              key={key}
              style={{
                width: "100%",
                alignSelf: "stretch",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
                WebkitBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: props.square ? "6/5  " : "5/3",
                  position: "relative",
                }}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 20,
                  gap: 15,
                  flexGrow: 1,
                }}
              >
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
                    style={{
                      margin: "12px 0 0 0",
                      fontSize: 15,
                      color: Colors.LIGHTGRAY,
                    }}
                    align="left"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: props.discount.ingeschakeld ? 14 : 16,
                          textDecoration: props.discount.ingeschakeld
                            ? "line-through"
                            : "none",
                          color: props.discount.ingeschakeld
                            ? Colors.GRAY
                            : Colors.RED,
                          fontFamily: "lato",
                          fontWeight: 600,
                        }}
                      >
                        €{Number(item.attributes.prijs).toFixed(2)}
                      </span>
                      {props.discount.ingeschakeld && (
                        <span
                          style={{
                            fontSize: 16,
                            color: Colors.RED,
                            fontFamily: "lato",
                            fontWeight: 600,
                          }}
                        >
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
      {props.buttonText != undefined && (
        <div
          style={{
            width: "100%",
            marginTop: 40,
            display: "flex",
            justifyContent: "center",
          }}
        >
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
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
