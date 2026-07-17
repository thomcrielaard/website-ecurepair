"use client";
import * as React from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import { API_URL } from "@/pages/_app";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

export default function ItemCards(props) {
  const size = UseDimensions();
  const itemsPerPage = props.itemsPerPage ?? props.items.length;

  const [currentItems, setCurrentItems] = React.useState(props.items);
  const [pageCount, setPageCount] = React.useState(props.pageCount ?? 0);
  const [itemOffset, setItemOffset] = React.useState(0);

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(props.items.slice(itemOffset, endOffset));
    setPageCount(
      props.pageCount ?? Math.ceil(props.items.length / itemsPerPage),
    );
  }, [itemOffset, props.items, itemsPerPage, props.pageCount]);

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
          className="mt-12.5"
          slim
        />
      )}
      <div className="my-10 grid w-full grid-cols-1 gap-x-[4%] gap-y-7.5 xxs:grid-cols-2 xxs:gap-y-10 xl:grid-cols-4 xl:gap-y-12.5">
        {currentItems
          .slice(0, props.short ? 4 : props.items.length)
          .map((item, key) => (
            <div
              key={key}
              className="flex w-full flex-col self-stretch shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]"
            >
              <div
                className={`relative w-full ${
                  props.square ? "aspect-[6/5]" : "aspect-[5/3]"
                }`}
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
                  className="object-cover"
                />
              </div>
              <div className="flex grow flex-col justify-between gap-3.75 p-5">
                <div>
                  <Title
                    text={item.onderdeelnummer ?? item.titel}
                    size="xs"
                    className="break-words"
                  />
                  <Text
                    text={item.samenvatting}
                    className="mt-3 text-[15px] text-lightgray"
                    align="left"
                  />
                </div>
                <div className="flex items-center justify-between gap-2.5">
                  <Button
                    text="MEER LEZEN"
                    href={
                      item.onderdeelnummer != undefined
                        ? `/onderdelen/${encodeURIComponent(
                            item.onderdeelnummer,
                          )}`
                        : `/nieuws/${encodeURIComponent(item.titel)}`
                    }
                    className="text-gray border-lightgray hover:text-red hover:border-red"
                    small
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {!props.short && (
        <ReactPaginate
          breakLabel={
            <span aria-label="Meer pagina's" tabIndex={0}>
              ...
            </span>
          }
          nextLabel={
            <div className="flex h-full w-full items-center justify-center">
              <FaChevronRight size={12} className="text-black" />
            </div>
          }
          hrefBuilder={(page) =>
            page === 0 || page > pageCount ? "#" : `/onderdelen/pagina/${page}`
          }
          hrefAllControls
          onPageChange={(event) => {
            if (props.similar) return handlePageClick(event);
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
            <div className="flex h-full w-full items-center justify-center">
              <FaChevronLeft size={12} className="text-black" />
            </div>
          }
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          ariaLabelBuilder={(page) => `Ga naar pagina ${page}`}
          nextAriaLabel="Volgende pagina"
          previousAriaLabel="Vorige pagina"
          breakAriaLabels={"Meer pagina's"}
        />
      )}
    </>
  );
}
