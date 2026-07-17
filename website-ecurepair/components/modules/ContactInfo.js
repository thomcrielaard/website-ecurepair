import * as React from "react";
import Link from "next/link";

import Title from "@/components/text/Title";

import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="w-full md:w-1/2">
      <Title
        text="GEGEVENS"
        underline
        size="lg"
        className="text-center md:text-left"
        containerClassName="md:justify-start"
        h1
      />
      <div className="flex flex-row flex-wrap items-start justify-evenly gap-15 pt-5 pr-2.5 md:justify-start">
        <div className="max-w-50">
          <Title size="xs" text="OPENINGSTIJDEN" className="mb-2.5" />
          <InfoRow left="Ma" right="10:00 - 16:00" />
          <InfoRow left="Di" right="10:00 - 16:00" />
          <InfoRow left="Wo" right="10:00 - 16:00" />
          <InfoRow left="Do" right="10:00 - 16:00" />
          <InfoRow left="Vrij" right="10:00 - 16:00" />
          <InfoRow left="Zat" right="Gesloten" />
          <InfoRow left="Zon" right="Gesloten" />
        </div>
        <div>
          <Title size="xs" text="ECU REPAIR" className="mb-2.5" />
          <div className="flex flex-col gap-3.75">
            <div className="flex items-center gap-5">
              <FaLocationDot size={16} className="min-w-4 text-gray" />
              <div>
                <Link
                  className="text-lg text-lightgray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal"
                  target="_blank"
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.7704101,4.9493124,9z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                >
                  Handelstraat 20-A
                </Link>
                <br />
                <Link
                  className="text-lg text-lightgray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal"
                  target="_blank"
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.7704101,4.9493124,9z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                >
                  6851EH Huissen
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <FaEnvelope size={16} className="min-w-4 text-gray" />
              <Link className="text-lg text-lightgray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal" href="mailto:info@ecurepair.nl">
                info@ecurepair.nl
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <FaPhone size={16} className="min-w-4 text-gray" />
              <Link className="text-lg text-lightgray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal" href="tel:+31262340042">
                +31(0)26 2340042
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow(props) {
  return (
    <div className="flex justify-between">
      <span className="text-lg text-lightgray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal">{`${props.left}:`}</span>
      <span className="text-lg text-lightgray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal">{props.right}</span>
    </div>
  );
}
