import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import Breakpoints from "@/styles/Breakpoints";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "../text/Title";

import { FaChevronRight } from "react-icons/fa6";

export default function Product(props) {
  return (
    <div className="flex flex-col items-center justify-between gap-12.5 lg:flex-row lg:gap-7.5 xl:justify-evenly">
      <div className="w-full xxs:w-4/5 lg:w-1/2 xl:w-2/5">
        <div className="relative w-full aspect-square">
          <Image
            className="object-cover border border-gray"
            src={
              API_URL +
              (props.product.afbeelding
                ? props.product.afbeelding.url
                : props.product.onderdeel.afbeeldingen
                  ? props.product.onderdeel.afbeeldingen[0].url
                  : "/uploads/no_image_available_260ccf02f5.png")
            }
            alt={props.product.onderdeelnummer}
            fill
            sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
            placeholder="blur"
            blurDataURL={BlurDataUrl}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2.5 xxs:w-4/5 lg:w-1/2 xl:w-2/5">
        <Title text={props.product.onderdeelnummer} size="lg" />
        <div className="flex gap-2.5">
          {props.product.merks.map((brand, key) => (
            <React.Fragment key={key}>
              <Link
                className="font-[family-name:poppins] font-medium italic text-lightgray underline"
                href={`/onderdelen/zoeken/1?merk=${brand.id}`}
              >
                {brand.naam}
              </Link>
              <FaChevronRight size={10} className="text-lightgray" />
              <Link
                className="font-[family-name:poppins] font-medium italic text-lightgray underline"
                href={`/onderdelen/zoeken/1?merk=${brand.id}&part=${props.product.onderdeel.id}`}
              >
                {props.product.onderdeel.naam}
              </Link>
            </React.Fragment>
          ))}
        </div>
        {/* <div className="-mb-4 flex items-center gap-2.5">
          <span className="font-[family-name:lato] font-medium text-[32px] text-red">
            €
            {Number(
              props.discount.ingeschakeld
                ? props.product.prijs -
                    (props.product.prijs * props.discount.procent) / 100
                : props.product.prijs
            ).toFixed(2)}
          </span>
          {props.discount.ingeschakeld && (
            <span className="font-[family-name:lato] font-medium text-[26px] text-gray line-through">
              €{Number(props.product.prijs).toFixed(2)}
            </span>
          )}
        </div> */}
        <div className="content">
          <ReactMarkdown>{props.product.omschrijving}</ReactMarkdown>
        </div>
        <div className="mt-3.75 flex flex-wrap justify-between gap-5">
          <div className="self-end">
            <Button
              text={"REPARATIEFORMULIER"}
              href="https://www.reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
              className="bg-red border-red hover:text-red hover:bg-white"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
