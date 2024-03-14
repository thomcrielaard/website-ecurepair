import * as React from "react";
import { useRouter } from "next/router";

import styles from "@/styles/layout/Footer.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";
import TextLink from "@/components/text/TextLink";

import Logo from "@/assets/svg/Logo";
import Google from "@/assets/svg/Google";
import Link from "next/link";
import Phone from "@/assets/svg/Phone";
import Mail from "@/assets/svg/Mail";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <div className={styles.FooterBackground}>
        <Container paddingVert={0} backgroundColor={Colors.GRAY}>
          <div className={styles.FooterContainer}>
            <div className={styles.FooterWrapper}>
              <Link href="/" aria-label="Home">
                <Logo width="200px" />
              </Link>
              <div className={styles.FooterLinksWrapper}>
                <FooterLink
                  text="info@ecurepair.nl"
                  href="mailto:info@ecurepair.nl"
                />
                <FooterLink text="+31(0)26-2340042" href="tel:+31262340042" />
                <FooterLink text="Ma-Vr. 10:00 - 16:00" href="/contact" />
              </div>
              <div className={styles.FooterIconsWrapper}>
                <FooterIcon
                  icon={<Google width={15} />}
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.9051848,5.9110414,14.25z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                  ariaLabel="Vind ons op Google"
                />
                <FooterIcon
                  icon={<Phone width={15} />}
                  href="tel:+31262340042"
                  ariaLabel="Bel nu"
                />
                <FooterIcon
                  icon={<Mail width={40} />}
                  href="mailto:info@ecurepair.nl"
                  ariaLabel="Mail nu"
                />
              </div>
            </div>
            <div className={styles.FooterSitelinksWrapper}>
              <Title text="SNEL NAAR" color={Colors.WHITE} size="sm" />
              <div className={styles.FooterSitelinksInnerWrapper}>
                <FooterLink text="Home" href="/" bar={router.pathname == "/"} />
                <FooterLink
                  text="Over ons"
                  href="/overons"
                  bar={router.pathname == "/overons"}
                />
                <FooterLink
                  text="DSG reparatie"
                  href="/dsg-reparatie"
                  bar={router.pathname == "/dsg-reparatie"}
                />
                <FooterLink
                  text="ECU reparatie"
                  href="/ecu-reparatie"
                  bar={router.pathname == "/ecu-reparatie"}
                />
                <FooterLink
                  text="Mechatronics"
                  href="/mechatronics"
                  bar={router.pathname == "/mechatronics"}
                />
                <FooterLink
                  text="Mercedes contactsloten"
                  href="/mercedes-contactsloten"
                  bar={router.pathname == "/mercedes-contactsloten"}
                />
                <FooterLink
                  text="Tellerklokken"
                  href="/tellerklokken"
                  bar={router.pathname == "/tellerklokken"}
                />
                <FooterLink
                  text="Onderdelen"
                  href="/onderdelen"
                  bar={
                    router.pathname.includes("/onderdelen") ||
                    router.pathname == "/reparatieformulier"
                  }
                />
                <FooterLink
                  text="Nieuws"
                  href="/nieuws"
                  bar={
                    router.pathname.includes("/nieuws") ||
                    router.pathname.includes("/fouten/")
                  }
                />
                <FooterLink
                  text="Contact"
                  href="/contact"
                  bar={router.pathname == "/contact"}
                />
              </div>
            </div>
            <div className={styles.FooterWrapper}>
              <Title text="OVER ONS" color={Colors.WHITE} size="sm" />
              <Text
                color={Colors.MEDIUMWHITE}
                text="ECU Repair specialiseert zich in auto-elektronica reparaties. Van ECU's tot tellerklokken en mechatronics, onze toegewijde experts bieden vertrouwde oplossingen voor uw voertuig, met jarenlange ervaring en een onwrikbaar streven naar kwaliteit en klanttevredenheid."
              />
            </div>
            <div className={styles.FooterSitelinksWrapper}>
              <Title text="GEGEVENS" color={Colors.WHITE} size="sm" />
              <div className={styles.FooterLinksWrapper}>
                <FooterLink
                  text={
                    <span className={styles.FooterSpanResponsive}>
                      Handelsstraat 20-A
                      <br />
                      6851EH Huissen
                    </span>
                  }
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.9051848,5.9110414,14.25z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                />
              </div>
              <div className={styles.FooterLinksWrapper}>
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
          <hr className={styles.FooterSeparator} />
          <div className={styles.FooterCopyrightWrapper}>
            <span className={styles.FooterCopyright}>
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
      target={blank && "_blank"}
      fontSize={18}
      text={
        <div className={styles.FooterLink}>
          {bar && <div className={styles.FooterLinkBar} />}
          {text}
        </div>
      }
      href={href}
      color={Colors.MEDIUMWHITE}
      style={{ lineHeight: 2 }}
      hoverColor={Colors.WHITE}
    />
  );
}

function FooterIcon({ icon, href, ariaLabel }) {
  return (
    <Link className={styles.FooterIcon} href={href} aria-label={ariaLabel}>
      {icon}
    </Link>
  );
}
