"use client";
import * as React from "react";
import Image from "next/image";

import Breakpoints from "@/styles/Breakpoints";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import { FaChevronDown } from "react-icons/fa6";

export default function ExpandableCards(props) {
  return (
    <div className="w-full flex flex-col gap-12.5">
      {props.cards.map((card, key) => (
        <ExpandableCard
          key={key}
          number={key}
          title={card.title}
          text={card.text}
          img={card.img}
        />
      ))}
    </div>
  );
}

function ExpandableCard(props) {
  const [open, setOpen] = React.useState(false);
  const textRef = React.useRef();

  return (
    <div onClick={() => setOpen(!open)} className="hover">
      <div className="relative w-full py-12.5 px-7.5">
        <Image
          sizes={`(min-width: ${Breakpoints.sm}) 45vw, 100vw`}
          placeholder="blur"
          fill
          src={props.img}
          alt={props.title}
          className="object-cover -z-20"
        />
        <div className="absolute inset-0 -z-10 bg-black/62" />
        <div className="flex gap-2 items-center">
          <span className="font-[family-name:poppins] font-medium text-sm text-gray-400/70">
            00{props.number + 1}
          </span>
          <div className="h-7.5 w-[0.5px] mr-2 ml-0.5 bg-gray-400/70" />
          <Title
            text={props.title}
            size="xxs"
            className="text-white font-[family-name:poppins] font-medium"
          />
          <FaChevronDown
            size={14}
            className={`min-w-3.5 text-white transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out px-5 shadow-[0px_0px_10px_0px_rgba(42,48,57,0.19)]"
        style={{
          maxHeight: open ? textRef.current?.offsetHeight + 32 : 0,
        }}
      >
        <div className="my-4">
          <Text forwardRef={textRef} align="left">
            {props.text}
          </Text>
        </div>
      </div>
    </div>
  );
}
