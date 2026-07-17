"use client"; // TODO: Fix
import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";
import TextLink from "@/components/text/TextLink";

import Logo from "@/assets/svg/Logo";
import { FaEnvelope, FaGoogle, FaPhone } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <div className="relative [clip-path:polygon(0_0,50%_30px,100%_0,100%_calc(100%+1px),0_calc(100%+1px))] lg:[clip-path:polygon(0_0,50%_65px,100%_0,100%_calc(100%+1px),0_calc(100%+1px))]">
        <Container paddingVert={0} className="bg-gray">
          <div className="flex flex-wrap justify-evenly gap-12.5 pt-25 pb-10 lg:pt-37.5 2xl:gap-0">
            <div className="flex w-full flex-col items-center gap-5 xxs:w-2/5 xxs:items-start 2xl:w-auto 2xl:max-w-[24%]">
              <Link href="/" aria-label="Home">
                <Logo width="200px" />
              </Link>
              <div className="flex flex-col items-center xxs:items-start">
                <FooterLink
                  text="info@ecurepair.nl"
                  href="mailto:info@ecurepair.nl"
                />
                <FooterLink text="+31(0)26-2340042" href="tel:+31262340042" />
                <FooterLink text="Ma-Vr. 10:00 - 16:00" href="/contact" />
              </div>
              <div className="flex justify-center gap-2.5 xxs:justify-start">
                <FooterIcon
                  icon={<FaGoogle size={15} />}
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.9051848,5.9110414,14.25z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                  ariaLabel="Vind ons op Google"
                />
                <FooterIcon
                  icon={<FaPhone size={15} />}
                  href="tel:+31262340042"
                  ariaLabel="Bel nu"
                />
                <FooterIcon
                  icon={<FaEnvelope size={18} />}
                  href="mailto:info@ecurepair.nl"
                  ariaLabel="Mail nu"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-5 xxs:w-62.5 xxs:items-start 2xl:w-auto 2xl:max-w-[24%]">
              <Title text="SNEL NAAR" className="text-white" size="sm" />
              <div className="flex flex-col items-center xxs:items-start">
                <FooterLink
                  text="DSG revisie"
                  href="/dsg-revisie"
                  bar={pathname == "/dsg-revisie"}
                />
                <FooterLink
                  text="ECU reparatie"
                  href="/ecu-reparatie"
                  bar={pathname == "/ecu-reparatie"}
                />
                <FooterLink
                  text="ECU revisie"
                  href="/ecu-revisie"
                  bar={pathname == "/ecu-revisie"}
                />
                <FooterLink
                  text="ECU testen"
                  href="/ecu-testen"
                  bar={pathname == "/ecu-testen"}
                />
                <FooterLink
                  text="Hybride accu reparatie"
                  href="/hybride-accu-reparatie"
                  bar={pathname == "/hybride-accu-reparatie"}
                />
                <FooterLink
                  text="Hybride accu revisie"
                  href="/hybride-accu-revisie"
                  bar={pathname == "/hybride-accu-revisie"}
                />
                <FooterLink
                  text="Mechatronics reparatie"
                  href="/mechatronics-reparatie"
                  bar={pathname == "/mechatronics-reparatie"}
                />
                <FooterLink
                  text="Mechatronics revisie"
                  href="/mechatronics-revisie"
                  bar={pathname == "/mechatronics-revisie"}
                />
                <FooterLink
                  text="Mercedes contactslot reparatie"
                  href="/mercedes-contactslot-reparatie"
                  bar={pathname == "/mercedes-contactslot-reparatie"}
                />
                <FooterLink
                  text="Mercedes contactslot revisie"
                  href="/mercedes-contactslot-revisie"
                  bar={pathname == "/mercedes-contactslot-revisie"}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-5 xxs:w-2/5 xxs:items-start 2xl:w-auto 2xl:max-w-[24%]">
              <Title text="OVER ONS" className="text-white" size="sm" />
              <Text className="text-center text-gray-400 xxs:text-left">
                ECU Repair is gespecialiseerd in het testen, repareren en
                reviseren van auto-elektronica. Wij richten ons op onder andere
                ECU&apos;s, DSG-systemen, mechatronics, Mercedes contactsloten
                en hybride accupakketten. Modules worden los getest en technisch
                beoordeeld, zodat alleen werkzaamheden worden uitgevoerd die ook
                echt nodig zijn.
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-5 xxs:w-62.5 xxs:items-start 2xl:w-auto 2xl:max-w-[24%]">
              <Title text="GEGEVENS" className="text-white" size="sm" />
              <div className="flex flex-col items-center xxs:items-start">
                <FooterLink
                  text={
                    <span className="text-center xxs:text-left">
                      Handelsstraat 20-A
                      <br />
                      6851EH Huissen
                    </span>
                  }
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.9051848,5.9110414,14.25z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                />
              </div>
              <div className="flex flex-col items-center xxs:items-start">
                <FooterLink
                  text="Algemene voorwaarden"
                  href="/algemene-voorwaarden.pdf"
                  bar
                  blank
                />
                <FooterLink
                  text="Privacyverklaring"
                  href="/privacystatement.pdf"
                  bar
                  blank
                />
              </div>
            </div>
          </div>
          <hr className="h-px w-full border-0 bg-lightgray" />
          <div className="flex w-full justify-center pt-2.5 pb-3.75">
            <span className="text-center font-[family-name:lato] font-semibold text-gray-400">
              &copy; Copyright Car Assist, All Rights Reserved.
            </span>
          </div>
        </Container>
      </div>
    </>
  );
}

function FooterLink({ text, href, bar, blank = false }) {
  return (
    <TextLink
      target={blank ? "_blank" : undefined}
      className="text-lg leading-loose text-gray-400 hover:text-white"
      text={
        <div className="flex items-center gap-1.5">
          {bar && <div className="h-0.5 w-2.5 bg-red" />}
          {text}
        </div>
      }
      href={href}
    />
  );
}

function FooterIcon({ icon, href, ariaLabel }) {
  return (
    <Link
      className="flex h-10 w-10 items-center justify-center rounded-full bg-lightgray text-white transition-colors duration-300 ease-in-out hover:bg-red"
      href={href}
      aria-label={ariaLabel}
    >
      {icon}
    </Link>
  );
}
