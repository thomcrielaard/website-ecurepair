import * as React from "react";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

import { FaMicrochip } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";

// TODO: Remove !'s once Title and Text support tailwind
export default function Cards() {
  return (
    <>
      <Container
        className="mb-31 sm:mb-24 md:mb-32"
        innerClassName="flex justify-center flex-col !px-0 !py-0 sm:!px-8 md:flex-row md:!px-16 lg:!px-32"
        paddingVert={0}
      >
        <div className="relative w-full md:w-1/2">
          <div className="relative z-1 flex h-[calc(100%+60px)] w-full flex-col items-center justify-start gap-7.5 bg-red px-6 pt-24 pb-10 text-center [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),50%_100%,0_calc(100%-30px))] sm:h-[calc(100%+35px)] sm:px-12.5 sm:py-20 md:h-[calc(100%+75px)] md:px-12.5 md:pt-20 md:pb-6.25 md:[clip-path:polygon(0_0,calc(100%+1px)_0,calc(100%+1px)_100%,0_calc(100%-75px))] xl:pb-12.5">
            <FaMicrochip className="text-white/50" size={75} />
            <Title
              text="ECU Reparatie"
              className="text-center !text-white"
              size="md"
            />
            <Text className="!text-center !text-white">
              Een defecte ECU betekent niet automatisch einde verhaal. Vaak gaat
              het om één zwakke schakel: een driver, voeding of
              soldeerverbinding die z’n werk niet meer doet. Wij repareren
              gericht, op componentniveau, en testen daarna uitgebreid. Dat
              scheelt kosten, voorkomt onnodige inleerprocedures en — eerlijk is
              eerlijk — de klant waardeert het meer dan gewoon blind vervangen.
            </Text>
          </div>
          <Button
            className="absolute left-1/2 -bottom-16 z-20 w-64! -translate-x-1/2 shadow-lg !text-red hover:!text-gray !bg-white"
            text="ECU Reparatie"
            href="/ecu-reparatie"
          />
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="relative flex h-[calc(100%+60px)] w-full flex-col items-center justify-start gap-7.5 bg-gray px-6 pt-24 pb-10 text-center [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),50%_100%,0_calc(100%-30px))] sm:h-[calc(100%+35px)] sm:px-12.5 sm:py-20 md:h-[calc(100%+75px)] md:px-12.5 md:pt-20 md:pb-6.25 md:[clip-path:polygon(0_0,calc(100%+1px)_0,calc(100%+1px)_calc(100%-75px),0_100%)] xl:pb-12.5">
            <GiGearStickPattern className="text-white/50" size={75} />
            <Title
              text="DSG Revisie"
              className="text-center !text-white"
              size="md"
            />
            <Text className="!text-center !text-white">
              Problemen met de Direct Shift Gearbox, ofwel de DSG, beginnen vaak
              subtiel: schokken, vertraagde reacties, foutcodes die steeds
              terugkomen. Bij een DSG revisie kijken we verder dan alleen de
              voordehandliggende problemen. We nemen de DSG grondig onder
              handen, vervangen bekende slijtdelen en testen hem na reparatie.
              Een revisie verhelpt niet alleen actuele problemen, maar voorkomt
              ook toekomstige storingen.
            </Text>
          </div>
          <Button
            className="absolute left-1/2 -bottom-16 z-20 w-64! -translate-x-1/2 shadow-lg !text-gray hover:!text-red !bg-white"
            text="DSG Revisie"
            href="/dsg-revisie"
          />
        </div>
      </Container>
    </>
  );
}
