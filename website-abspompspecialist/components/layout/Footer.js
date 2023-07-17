import * as React from "react";
import { useRouter } from "next/router";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
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

export default function Footer(props) {
  const size = UseDimensions();
  const router = useRouter();

  return (
    <>
      <div
        style={{
          position: "relative",
          clipPath:
            size.width < Breakpoints.md
              ? "polygon(0 0, 50% 30px, 100% 0, 100% calc(100% + 1px), 0 calc(100% + 1px))"
              : "polygon(0 0, 50% 65px, 100% 0, 100% calc(100% + 1px), 0 calc(100% + 1px))",
        }}
      >
        <Container paddingVert={0} backgroundColor={Colors.GRAY}>
          <div
            style={{
              padding: `${
                size.width < Breakpoints.md ? "100" : "150"
              }px 0 40px 0`,
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: size.width < Breakpoints.xl ? 50 : 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                maxWidth: size.width < Breakpoints.xl ? undefined : "24%",
                width:
                  size.width < Breakpoints.xs
                    ? "100%"
                    : size.width < Breakpoints.xl
                    ? "40%"
                    : undefined,
                alignItems:
                  size.width < Breakpoints.xs ? "center" : "flex-start",
              }}
            >
              <Link href="/">
                <Logo width="200px" />
              </Link>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    size.width < Breakpoints.xs ? "center" : "flex-start",
                }}
              >
                <FooterLink
                  text="info@abspompspecialist.nl"
                  href="mailto:info@abspompspecialist.nl"
                />
                <FooterLink text="+31(0)26-2340042" href="tel:+31262340042" />
                <FooterLink text="Ma-Vr. 9:00 - 18:00" href="/contact" />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  justifyContent:
                    size.width < Breakpoints.xs ? "center" : "flex-start",
                }}
              >
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
                  href="mailto:info@abspompspecialist.nl"
                  ariaLabel="Mail nu"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                maxWidth: size.width < Breakpoints.xl ? undefined : "24%",
                width:
                  size.width < Breakpoints.xs
                    ? "100%"
                    : size.width < Breakpoints.xl
                    ? 250
                    : undefined,
                alignItems:
                  size.width < Breakpoints.xs ? "center" : "flex-start",
              }}
            >
              <Title text="SNEL NAAR" color={Colors.WHITE} size="sm" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    size.width < Breakpoints.xs ? "center" : "flex-start",
                }}
              >
                <FooterLink text="Home" href="/" bar={router.pathname == "/"} />
                <FooterLink
                  text="Over ons"
                  href="/overons"
                  bar={router.pathname == "/overons"}
                />
                <FooterLink
                  text="Reparaties"
                  href="/reparaties"
                  bar={
                    router.pathname.includes("/reparaties") ||
                    router.pathname == "/reparatieformulier"
                  }
                />
                <FooterLink
                  text="Foutcodes"
                  href="/foutcodes"
                  bar={
                    router.pathname.includes("/foutcodes") ||
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                maxWidth: size.width < Breakpoints.xl ? undefined : "24%",
                width:
                  size.width < Breakpoints.xs
                    ? "100%"
                    : size.width < Breakpoints.xl
                    ? "40%"
                    : undefined,
                alignItems:
                  size.width < Breakpoints.xs ? "center" : "flex-start",
              }}
            >
              <Title text="OVER ONS" color={Colors.WHITE} size="sm" />
              <Text
                align={size.width < Breakpoints.xs ? "center" : "left"}
                style={{ margin: 0 }}
                color={Colors.MEDIUMWHITE}
                text="ABS Pomp Specialist is een toonaangevende expert op het gebied van ABS pomp reparatie en revisie. Wij bieden een snelle, efficiënte en hoogwaardige service voor al uw ABS gerelateerde problemen. Ons team van ervaren monteurs staat altijd klaar om u te helpen. Uw veiligheid en tevredenheid zijn onze topprioriteiten."
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                maxWidth: size.width < Breakpoints.xl ? undefined : "24%",
                width:
                  size.width < Breakpoints.xs
                    ? "100%"
                    : size.width < Breakpoints.xl
                    ? 250
                    : undefined,
                alignItems:
                  size.width < Breakpoints.xs ? "center" : "flex-start",
              }}
            >
              <Title text="GEGEVENS" color={Colors.WHITE} size="sm" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    size.width < Breakpoints.xs ? "center" : "flex-start",
                }}
              >
                <FooterLink
                  text={
                    <span
                      style={{
                        textAlign:
                          size.width < Breakpoints.xs ? "center" : "left",
                      }}
                    >
                      Handelsstraat 20-A
                      <br />
                      6851EH Huissen
                    </span>
                  }
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.9051848,5.9110414,14.25z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    size.width < Breakpoints.xs ? "center" : "flex-start",
                }}
              >
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
          <hr
            style={{
              border: 0,
              backgroundColor: Colors.LIGHTGRAY,
              height: 1,
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "10px 0 15px 0",
            }}
          >
            <span
              style={{
                fontSize: 15,
                color: Colors.MEDIUMWHITE,
                fontWeight: 600,
                fontFamily: "lato",
                textAlign: "center",
              }}
            >
              &copy; Copyright Car Assist, All Rights Reserved.
            </span>
            <span
              style={{
                fontSize: 18,
                color: Colors.MEDIUMWHITE,
                fontFamily: "lato",
              }}
            ></span>
          </div>
        </Container>
      </div>
    </>
  );
}

function FooterLink(props) {
  return (
    <TextLink
      target={props.blank && "_blank"}
      fontSize={18}
      text={
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {props.bar && (
            <div
              style={{ width: 10, height: 2, backgroundColor: Colors.RED }}
            />
          )}
          {props.text}
        </div>
      }
      href={props.href}
      color={Colors.MEDIUMWHITE}
      style={{ lineHeight: 2 }}
      hoverColor={Colors.WHITE}
    />
  );
}

function FooterIcon(props) {
  const [hover, setHover] = React.useState(false);

  const newIcon = React.cloneElement(props.icon, {
    color: Colors.WHITE,
  });

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? Colors.RED : Colors.LIGHTGRAY,
        width: 40,
        height: 40,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: ".3s ease-in-out",
      }}
      href={props.href}
      aria-label={props.ariaLabel}
    >
      {newIcon}
    </Link>
  );
}
