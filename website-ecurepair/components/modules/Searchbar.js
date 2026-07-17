"use client";
import * as React from "react";
import Link from "next/link";

import Button from "@/components/modules/Button";
import constructSearchUrl from "@/services/ConstructSearchUrl";

import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

export default function Searchbar(props) {
  const inputRef = React.useRef(null);
  const selectBrandRef = React.useRef(null);
  const selectPartRef = React.useRef(null);

  const [inputWidth, setInputWidth] = React.useState(160);
  const [barWidth, setBarWidth] = React.useState(0);

  const [parts, setParts] = React.useState(props.initialParts ?? []);

  React.useEffect(() => {
    if (inputRef.current && props.text) {
      inputRef.current.value = props.text;
      handleInputChange();
    }

    if (selectBrandRef.current && props.merk && props.merk != "DEFAULT") {
      changeMerk(props.merk, props.part);
      selectBrandRef.current.value = props.merk;
    } else {
      setParts([]);
    }

    if (selectPartRef.current && props.part && props.part != "DEFAULT") {
      changePart();
      selectPartRef.current.value = props.part;
    }
  }, [props.text, props.merk, props.part]);

  const changeMerk = (merk, clearPart = true) => {
    const selectedValue = merk;
    const brand = props.searchbarData.find(
      (item) => item.id === parseInt(selectedValue),
    );
    if (brand) {
      setParts(brand.onderdeels);
      setBarWidth(48);
      if (clearPart) {
        selectPartRef.current.value = "DEFAULT";
      }
    }
  };

  const changePart = () => {
    setBarWidth(100);
  };

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    if (inputValue === "") {
      setInputWidth(160);
      return;
    }
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "18px lato"; // Set the font size and family to match the input
    const width = Math.ceil(context.measureText(inputValue).width);
    setInputWidth(width + 8);
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-187.5 flex-col justify-between gap-7.5 md:flex-row">
        <div className="flex w-full flex-col justify-between">
          <div className="pb-2.5 md:pb-5">
            <form method="GET" action="/onderdelen/zoeken/1">
              <input
                type="text"
                name="onderdeel"
                placeholder="Onderdelen zoeken"
                className="searchbar-input h-full w-full border-0 bg-transparent px-1 py-0 text-lg text-gray font-[family-name:lato] font-semibold"
                ref={inputRef}
                onChange={handleInputChange}
              />
            </form>

            <div className="mt-0.5 hidden w-full md:flex">
              <div
                className="h-0.5 bg-red transition-[width] duration-300 ease-in-out"
                style={{ width: `min(${inputWidth}px, 100%)` }}
              />
              <div className="h-0.5 flex-1 bg-red/29" />
            </div>
          </div>

          <div className="flex gap-2.5">
            <div className="flex h-full flex-1 flex-col gap-1.25 md:flex-row md:gap-2.5 lg:gap-10">
              <div className="mb-2.5 h-px w-full bg-gray/29 md:hidden" />

              <select
                className="select-search hover h-full w-full border-0 bg-transparent px-1 py-0 text-lg text-gray font-[family-name:lato] font-semibold [&>option]:font-medium"
                ref={selectBrandRef}
                name="merk"
                defaultValue={"DEFAULT"}
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

              <div className="mb-2.5 h-px w-full bg-gray/29 md:hidden" />

              <select
                className={`select-search h-full w-full border-0 bg-transparent px-1 py-0 text-lg text-gray font-[family-name:lato] font-semibold [&>option]:font-medium ${
                  parts.length === 0 ? "select-disabled" : "hover"
                }`}
                ref={selectPartRef}
                defaultValue={"DEFAULT"}
                disabled={parts.length === 0}
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

              <div className="mb-2.5 h-px w-full bg-gray/29 md:hidden" />
            </div>

            <Link
              href="/onderdelen/pagina/1"
              className="hover relative z-1 ml-auto w-4.5 border-0 bg-transparent p-0"
              aria-label="Selectie wissen"
            >
              <FaXmark size={16} className="text-gray" />
            </Link>
          </div>

          <div className="mt-0.5 hidden w-full md:flex">
            <div
              className="h-0.5 bg-red transition-[width] duration-300 ease-in-out"
              style={{ width: `${barWidth}%` }}
            />
            <div className="h-0.5 flex-1 bg-red/29" />
          </div>
        </div>

        <div className="flex">
          <Button
            text={
              <div className="flex gap-2.5 self-start">
                ZOEKEN <FaMagnifyingGlass size={20} />
              </div>
            }
            className="bg-red border-red self-center"
            href={constructSearchUrl(
              inputRef.current?.value,
              selectBrandRef.current?.value,
              selectPartRef.current?.value,
            )}
          />
        </div>
      </div>
    </div>
  );
}
