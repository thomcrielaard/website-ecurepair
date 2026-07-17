"use client"; // TODO: Fix
import * as React from "react";
import Image from "next/image";

import Container from "@/components/containers/Container";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";

import Header from "@/assets/img/header-home.jpg";

import Logo from "@/assets/svg/Logo";
import constructSearchUrl from "@/services/ConstructSearchUrl";

import { FaMagnifyingGlass } from "react-icons/fa6";

export default function BigBanner(props) {
  const selectPartRef = React.useRef(null);

  const [inputValue, setInputValue] = React.useState(null);
  const [brandValue, setBrandValue] = React.useState(null);
  const [partValue, setPartValue] = React.useState(null);
  const [parts, setParts] = React.useState([]);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const changeMerk = (merk) => {
    const selectedValue = merk;
    const brand = props.searchbarData.find(
      (item) => item.id === parseInt(selectedValue),
    );
    if (brand) {
      setBrandValue(merk);
      setParts(brand.onderdeels);
      setPartValue(null);
      selectPartRef.current.value = "DEFAULT";
    }
  };

  const changePart = (part) => {
    setPartValue(part);
  };

  return (
    <>
      <div className="relative bg-gray">
        <Image
          className="z-1 object-cover"
          src={Header}
          alt={"Omslagfoto"}
          placeholder="blur"
          sizes="100vw"
          fill
          priority
        />

        <Container innerClassName="z-2 flex min-h-0 flex-col items-center justify-center gap-5 pt-24 pb-0 md:h-[80vh] md:min-h-125 md:py-16">
          <Logo responsive h1 />

          <Text
            className="text-white [text-shadow:0px_0px_4px_#000000]"
            align="center"
            slim
          >
            Welkom bij ECU Repair, dé specialist in geavanceerde autoreparaties.
            Wij hebben jarenlange ervaring in het testen, repareren en reviseren
            van auto-elektronica. Denk aan ECU&apos;s, DSG&apos;s, mechatronics,
            Mercedes contactsloten en hybride accupakketten. Modules worden los
            getest, technisch beoordeeld en alleen behandeld wanneer dat ook
            echt zinvol is.
          </Text>
        </Container>

        <div className="relative -bottom-12 left-1/2 z-3 flex w-full max-w-500 -translate-x-1/2 flex-col justify-between gap-3.75 bg-gray p-8 shadow-[0px_0px_14px_0px_rgba(0,0,0,0.25)] md:absolute md:flex-row md:py-14 lg:px-20 xl:w-3/4">
          <input
            type="text"
            placeholder="Onderdeelnummer"
            className="h-10 w-full rounded-xs border-0 border-b border-lightgray bg-white/30 px-2.5 py-0 text-[1.15rem] font-[family-name:lato] font-medium transition-all duration-300 ease-in-out placeholder:text-white md:h-auto md:text-[1.1rem] lg:text-xl"
            onChange={(e) => handleInputChange(e.target.value)}
          />

          <select
            defaultValue={"DEFAULT"}
            className="h-10 w-full rounded-xs border-0 border-b border-lightgray bg-white/30 px-2.5 py-0 text-[1.15rem] font-[family-name:lato] font-medium text-white transition-all duration-300 ease-in-out focus:border-red focus:outline-none disabled:text-gray disabled:hover:cursor-not-allowed md:h-auto md:text-[1.1rem] lg:text-xl [&>option]:font-medium [&>option:not(:disabled)]:text-gray"
            onChange={(e) => changeMerk(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Selecteer merk
            </option>
            {props.searchbarData.map((brand, key) => (
              <option key={key} value={brand.id}>
                {brand.naam}
              </option>
            ))}
          </select>

          <select
            defaultValue={"DEFAULT"}
            disabled={parts.length === 0}
            ref={selectPartRef}
            className="h-10 w-full rounded-xs border-0 border-b border-lightgray bg-white/30 px-2.5 py-0 text-[1.15rem] font-[family-name:lato] font-medium text-white transition-all duration-300 ease-in-out focus:border-red focus:outline-none disabled:text-gray disabled:hover:cursor-not-allowed md:h-auto md:text-[1.1rem] lg:text-xl [&>option]:font-medium [&>option:not(:disabled)]:text-gray"
            onChange={(e) => changePart(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Selecteer onderdeel
            </option>
            {parts.map((part, key) => (
              <option key={key} value={part.id}>
                {part.naam}
              </option>
            ))}
          </select>

          <Button
            text={
              <div className="flex gap-2.5 self-start">
                ZOEKEN <FaMagnifyingGlass size={20} />
              </div>
            }
            className="self-center bg-red border-red"
            href={constructSearchUrl(inputValue, brandValue, partValue)}
          />
        </div>
      </div>
    </>
  );
}
