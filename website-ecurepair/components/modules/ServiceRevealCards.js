import Link from "next/link";
import Image from "next/image";

import Banner from "@/assets/img/parallex.jpg";
import Title from "../text/Title";
import Text from "../text/Text";

import ECUReparatie from "@/assets/img/services/ecu-reparatie.png";
import ECUTesten from "@/assets/img/services/ecu-testen.png";
import ECURevisie from "@/assets/img/services/ecu-revisie.png";
import DSGRevisie from "@/assets/img/services/dsg-revisie.png";
import MCReparatie from "@/assets/img/services/mercedes-contactslot-reparatie.jpeg";
import MCRevisie from "@/assets/img/services/mercedes-contactslot-revisie.png";
import MTReparatie from "@/assets/img/services/mechatronic-reparatie.png";
import MTRevisie from "@/assets/img/services/mechatronic-revisie.png";
import HybridReparatie from "@/assets/img/services/hybride-accu-reparatie.png";
import HybridRevisie from "@/assets/img/services/hybride-accu-revisie.png";
import { FaLongArrowAltRight } from "react-icons/fa";

export const DEFAULT_SERVICE_REVEAL_IDS = [
  "ecu-reparatie",
  "ecu-testen",
  "ecu-revisie",
  "dsg-revisie",
  "mercedes-contactslot-reparatie",
  "mercedes-contactslot-revisie",
  "mechatronic-reparatie",
  "mechatronic-revisie",
  "hybride-accu-reparatie",
  "hybride-accu-revisie",
];

export const SERVICE_REVEAL_ITEMS = [
  {
    id: "ecu-reparatie",
    href: "/ecu-reparatie",
    title: "ECU reparatie",
    summary: "Los problemen met jouw ECU snel en vakkundig op.",
    description: (
      <>
        Wij repareren je ECU gericht, op componentniveau, en testen daarna
        uitgebreid. Dat scheelt kosten en voorkomt onnodige inleerprocedures.
      </>
    ),
    imageSrc: ECUReparatie,
    imageAlt: "ECU reparatie",
  },
  {
    id: "ecu-testen",
    href: "/ecu-testen",
    title: "ECU testen",
    summary: "Professionele test en diagnose van jouw ECU door ECU Repair.",
    description: (
      <>
        Met professionele testopstellingen bootsen we voertuigsituaties na en
        controleren we de inputs en outputs. Zo weet je gelijk waar je aan toe
        bent.
      </>
    ),
    imageSrc: ECUTesten,
    imageAlt: "ECU testen",
  },
  {
    id: "ecu-revisie",
    href: "/ecu-revisie",
    title: "ECU revisie",
    summary: "Preventieve revisie van de ECU voor langdurige betrouwbaarheid.",
    description: (
      <>
        Bij een revisie pakken we preventief bekende zwakke punten aan,
        vervangen we defecte onderdelen en testen we de ECU volledig.
      </>
    ),
    imageSrc: ECURevisie,
    imageAlt: "ECU revisie",
  },
  {
    id: "dsg-revisie",
    href: "/dsg-revisie",
    title: "DSG revisie",
    summary: "Herstel jouw DSG en voorkom toekomstige storingen.",
    description: (
      <>
        Problemen bij de DSG beginnen vaak subtiel, maar lopen uit tot grote
        storingen. Een revisie verhelpt actuele problemen en toekomstige
        storingen.
      </>
    ),
    imageSrc: DSGRevisie,
    imageAlt: "DSG revisie",
  },
  {
    id: "mercedes-contactslot-reparatie",
    href: "/mercedes-contactslot-reparatie",
    title: "Mercedes contactslot reparatie",
    summary: "Gerichte reparatie van ESL/EZS van het Mercedes contactslot.",
    description: (
      <>
        Als je Mercedes niet meer start, kan het contactslot het probleem zijn.
        Een contactslot reparatie kan dit probleem oplossen.
      </>
    ),
    imageSrc: MCReparatie,
    imageAlt: "Mercedes contactslot reparatie",
  },
  {
    id: "mercedes-contactslot-revisie",
    href: "/mercedes-contactslot-revisie",
    title: "Mercedes contactslot revisie",
    summary: "Revisie van de ESL/EZS om startproblemen te voorkomen.",
    description: (
      <>
        We pakken slijtage en bekende zwakke punten aan voordat ze tot
        startproblemen leiden. Dat scheelt sleepdiensten, frustratie en onnodige
        vervangingen.
      </>
    ),
    imageSrc: MCRevisie,
    imageAlt: "Mercedes contactslot revisie",
  },
  {
    id: "mechatronic-reparatie",
    href: "/mechatronic-reparatie",
    title: "Mechatronic reparatie",
    summary:
      "Schakelproblemen oplossen met snel en efficiënt herstel op de oorzaak.",
    description: (
      <>
        Bij een defecte Mechatronic schakelt de auto niet goed. probleem in één
        sensor, klepaansturing of print. Bij reparatie lossen wij dit spoedig en
        voordelig op.
      </>
    ),
    imageSrc: MTReparatie,
    imageAlt: "Mechatronic reparatie",
  },
  {
    id: "mechatronic-revisie",
    href: "/mechatronic-revisie",
    title: "Mechatronic revisie",
    summary:
      "Revisie met updates en test om terugkerende storingen te verhelpen.",
    description: (
      <>
        Bij terugkerende storingen of bekende foutmeldingen is revisie vaak de
        beste keuze. We vervangen kwetsbare componenten, werken software bij en
        testen de unit.
      </>
    ),
    imageSrc: MTRevisie,
    imageAlt: "Mechatronic revisie",
  },
  {
    id: "hybride-accu-reparatie",
    href: "/hybride-accu-reparatie",
    title: "Hybride accu reparatie",
    summary: "Herstel van laad en accuproblemen bij hybride auto accu's.",
    description: (
      <>
        Een accustoring bij een hybride zit vaak in een module, sensor of
        verbinding. Wij lezen de accu uit en lossen het probleem op.
      </>
    ),
    imageSrc: HybridReparatie,
    imageAlt: "Hybride accu reparatie",
  },
  {
    id: "hybride-accu-revisie",
    href: "/hybride-accu-revisie",
    title: "Hybride accu revisie",
    summary:
      "Revisie en balancering bij een hybride accu voor verlengde levensduur.",
    description: (
      <>
        Bij terugkerende problemen of een verourderde accu is een revisie aan te
        raden. Het is goedkoper dan een nieuwe accu en verlengt de levensduur.
      </>
    ),
    imageSrc: HybridRevisie,
    imageAlt: "Hybride accu revisie",
  },
];

export default function ServiceRevealCards({
  className = "",
  includeIds,
  items,
  maxItems,
}) {
  const sourceItems = items ?? SERVICE_REVEAL_ITEMS;

  const selectedItems = (() => {
    if (includeIds === null) return sourceItems;

    const effectiveIncludeIds = includeIds ?? DEFAULT_SERVICE_REVEAL_IDS;
    const byId = new Map(sourceItems.map((item) => [item.id, item]));
    return effectiveIncludeIds.map((id) => byId.get(id)).filter(Boolean);
  })();

  const renderedItems =
    typeof maxItems === "number"
      ? selectedItems.slice(0, maxItems)
      : selectedItems;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {renderedItems.map((item, key) => {
        const {
          href,
          title,
          description,
          imageSrc,
          summary,
          imageAlt = "",
        } = item;

        const a11yTextId =
          `${title}-${key}`.toLowerCase().replace(/\s+/g, "-") + "-desc";

        return (
          <Link
            href={href}
            key={key}
            aria-labelledby={`${a11yTextId}-title`}
            aria-describedby={a11yTextId}
            className={`group relative block aspect-square w-full overflow-hidden shadow-sm ring-1 ring-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 ${className}`}
          >
            {/* SEO + accessibility text (not visible) */}
            <p id={a11yTextId} className="sr-only">
              {description}
            </p>

            {/* Background image */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)",
              }}
            />

            {/* Visible title */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 group-hover:opacity-0 transition-opacity duration-300">
              <Title text={title} size="xs" color="white" />
              <Text text={summary} color="white" fontSize={16} align="left" />
            </div>

            {/* Hover reveal overlay */}
            <div
              className={`absolute inset-0 z-20 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-black/80`}
            >
              <div className="flex h-full flex-col justify-end p-5">
                <Title text={title} size="xs" color="white" />

                <Text
                  className="mt-2 !text-sm leading-relaxed !text-white/90"
                  align="left"
                >
                  {description}
                </Text>

                <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/95">
                  Meer informatie
                  <FaLongArrowAltRight size={12} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
