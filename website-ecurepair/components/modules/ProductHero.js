import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FaPhoneAlt, FaRocket, FaShieldAlt } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaGears } from "react-icons/fa6";

import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "../text/Title";

import Chevron from "@/assets/svg/Chevron";

export default function ProductHero(props) {
  return (
    <>
      <div className="flex gap-2 mb-4">
        {props.product.merks.map((brand, key) => (
          <React.Fragment key={key}>
            <Link
              className="font-[poppins] font-medium italic !text-lightgray !underline"
              href={`/onderdelen/zoeken/1?merk=${brand.id}`}
            >
              {brand.naam}
            </Link>
            <Chevron
              width={10}
              color={Colors.LIGHTGRAY}
              style={{ rotate: "-90deg" }}
            />
            <Link
              className="font-[poppins] font-medium italic !text-lightgray !underline"
              href={`/onderdelen/zoeken/1?merk=${brand.id}&part=${props.product.onderdeel.id}`}
            >
              {props.product.onderdeel.naam}
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
        <div className="w-full lg:w-2/5 max-w-[500px] lg:max-w-[1000px]">
          <div className="relative w-full aspect-square">
            <Image
              className="object-cover border border-gray-400"
              src={
                API_URL +
                (props.product.afbeelding
                  ? props.product.afbeelding.url
                  : props.product.onderdeel.afbeeldingen
                  ? props.product.onderdeel.afbeeldingen[0].url
                  : "/uploads/no_image_available_3b34877500.png")
              }
              alt={props.product.onderdeelnummer}
              fill
              sizes={`(min-width: ${Breakpoints.md}px) 33vw, (min-width: ${Breakpoints.xs}px) 85vw, 95vw`}
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/5 xl:w-1/2 gap-6">
          <Title text={props.product.onderdeelnummer} size="md" h1 />
          <div className="content">
            Ervaart u problemen met uw {props.product.onderdeelnummer}? Dan bent
            u bij ons aan het juiste adres! Wij zijn gespecialiseerd in de
            reparatie en revisie van {props.product.onderdeelnummer}. Onze
            ervaren monteurs hebben jarenlange ervaring met het oplossen van
            problemen met deze pompen en kunnen u helpen bij het vinden van de
            juiste oplossing.
          </div>
          <hr className="w-full border-t border-gray-300" />
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
          <span className="text-gray-900">
            Wilt u een reparatie inplannen? Vul dan nu het reparatieformulier
            in!
            <br />
            <em>
              ECU Repair is alleen werkzaam voor bedrijven, wij verlenen geen
              diensten aan particulieren.
            </em>
          </span>
          <div className="flex gap-6 items-center">
            <div className="hidden xxs:flex w-16 min-w-16 h-16 relative rounded-full justify-center items-center border-2 border-emerald-500">
              <FaPhoneAlt size={26} color={"oklch(0.696 0.17 162.48)"} />
            </div>
            <div className="flex flex-col h-full justify-between py-1">
              <div className="flex gap-4 w-full items-center">
                <FaPhoneAlt
                  size={26}
                  color={"oklch(0.696 0.17 162.48)"}
                  className="inline-block xxs:hidden"
                />
                <span className="text-gray-500">
                  Vragen over deze revisie? Stel ze aan één van onze
                  specialisten!
                </span>
              </div>
              <div className="w-full flex flex-col xxs:flex-row gap-2 mt-2 xxs:mt-0">
                <Link
                  className="flex gap-2 items-center text-red font-semibold text-xl"
                  href="tel:+31262340042"
                >
                  +31(0)26-2340042
                </Link>
                <span className="text-xl hidden xxs:block">of</span>
                <Link
                  target="_blank"
                  className="flex gap-2 items-center !text-emerald-500 font-semibold text-xl"
                  href={`https://api.whatsapp.com/send/?phone=31262340042&text=Beste+ECU+Repair%2C%0a%0a+Ik+heb+een+vraag+over+${encodeURIComponent(
                    props.product.onderdeelnummer
                  )}%0a%0a_ECU+Repair+is+alleen+werkzaam+voor+bedrijven_&type=phone_number&app_absent=0`}
                >
                  WhatsApp Ons
                </Link>
              </div>
            </div>
          </div>
          <hr className="w-full border-t border-gray-300" />
          <div className="w-full grid-cols-1 xxs:grid-cols-2 grid gap-8">
            <div className="flex gap-4">
              <div className="w-12 min-w-12 h-12 relative rounded-full flex justify-center items-center border-1 border-red">
                <FaShieldAlt size={20} color={Colors.RED} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">Betrouwbaar</span>
                <span className="text-gray-500">Wij staan voor kwaliteit</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 min-w-12 h-12 relative rounded-full flex justify-center items-center border-1 border-red">
                <FaGears size={26} color={Colors.RED} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">Ervaren</span>
                <span className="text-gray-500">
                  Jarenlange ervaring in ECU systemen
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 min-w-12 h-12 relative rounded-full flex justify-center items-center border-1 border-red">
                <FaRocket size={20} color={Colors.RED} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">Efficiënt</span>
                <span className="text-gray-500">
                  Snelle service, snelle resultaten
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 min-w-12 h-12 relative rounded-full flex justify-center items-center border-1 border-red">
                <IoIosPricetags size={22} color={Colors.RED} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">Prijsbewust</span>
                <span className="text-gray-500">
                  Geen hoge of onverwachte kosten
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
