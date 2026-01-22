"use client"; // TODO: Fix
import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Axios from "axios";

import { Spin as Hamburger } from "hamburger-react";

import styles from "@/styles/layout/Navbar.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import TextLink from "@/components/text/TextLink";

import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Background from "@/assets/img/navbar-bg.jpg";
import Chevron from "@/assets/svg/Chevron";
import { API_URL } from "@/pages/_app";

async function getVacation() {
  const { data } = await Axios.get(
    `${API_URL}/api/vakantie?fields[0]=ingeschakeld&fields[1]=tekst`,
  );
  return {
    enabled: data.data.ingeschakeld,
    text: data.data.tekst,
  };
}

export default function Navbar(props) {
  const pathname = usePathname();

  const inputRef = React.useRef(null);

  const [isOpen, setOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [focusSearch, setFocusSearch] = React.useState(false);
  const [vacation, setVacation] = React.useState({ enabled: false, text: "" });

  const handleScroll = () => {
    setShowNavbar(window.scrollY > 30);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  React.useEffect(() => {
    (async () => {
      const data = await getVacation();
      setVacation(data);
    })();
  }, []);

  return (
    <>
      {!props.transparent && (
        <div
          className={`${styles.NavbarBackground} 
        ${vacation.enabled && styles.BackgroundVacation}`}
        >
          <Image
            src={Background}
            fill
            sizes="100vw"
            placeholder="blur"
            alt="Navbar"
            className={styles.NavbarBackgroundImage}
          />
          <div className={styles.NavbarBackgroundOverlay} />
        </div>
      )}
      <MobileNavExpanded open={isOpen} setOpen={setOpen} />

      {vacation.enabled && (
        <div className={styles.NavbarVacation}>{vacation.text}</div>
      )}
      <Container
        className={`${styles.NavbarContainer} 
        ${showNavbar && styles.ShowNavbar} 
        ${isOpen && styles.isOpen}
        ${vacation.enabled && styles.VacationContainer}`}
        paddingVert="15px"
        background="transparent"
      >
        <div className={styles.NavbarWrapper}>
          <NavbarLink href="/" text="Home" active={pathname == "/"} />
          <div className={styles.NavbarDropdownWrapper}>
            <NavbarLink
              href="/overons"
              active={
                pathname == "/overons" ||
                pathname == "/dsg-reparatie" ||
                pathname == "/ecu-reparatie" ||
                pathname == "/mechatronics" ||
                pathname == "/mercedes-contactsloten" ||
                pathname == "/tellerklokken"
              }
              text={
                <div className={styles.NavbarDropdownButton}>
                  Over ons <Chevron width={14} />
                </div>
              }
            />
            <div className={styles.NavbarDropdown}>
              <NavbarLink href="/overons" text="Over ons" />
              <NavbarLink href="/dsg-revisie" text="DSG revisie" />
              <NavbarLink href="/ecu-reparatie" text="ECU reparatie" />
              <NavbarLink href="/ecu-revisie" text="ECU revisie" />
              <NavbarLink href="/ecu-testen" text="ECU testen" />
              <NavbarLink
                href="/mercedes-contactslot-reparatie"
                text="Mercedes contactslot reparatie"
              />
              <NavbarLink
                href="/mechatronic-reparatie"
                text="Mechatronic reparatie"
              />
              {/* <NavbarLink
                href="/hybride-accu-reparatie"
                text="Hybride accu reparatie"
              />
              <NavbarLink
                href="/hybride-accu-revisie"
                text="Hybride accu revisie"
              />
              <NavbarLink
                href="/mechatronic-reparatie"
                text="Mechatronic reparatie"
              />
              <NavbarLink
                href="/mechatronic-revisie"
                text="Mechatronic revisie"
              />
              <NavbarLink
                href="/mercedes-contactslot-revisie"
                text="Mercedes contactslot revisie"
              /> */}
            </div>
          </div>
          <NavbarLink
            href="/onderdelen/pagina/1"
            text="Onderdelen"
            active={pathname.includes("/onderdelen")}
          />
          <NavbarLink
            href="https://www.reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
            text="Reparatieformulier"
            target="_blank"
          />
          <NavbarLink
            href="/nieuws"
            text="Nieuws"
            active={pathname.includes("/nieuws")}
          />
          <NavbarLink
            href="/contact"
            text="Contact"
            active={pathname == "/contact"}
          />
          <div className={styles.NavbarHamburger}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color={Colors.WHITE}
              label="Toggle navigatiebalk"
            />
          </div>

          <div className={styles.NavbarSearchContainer}>
            <Link
              className={`hover 
              ${styles.NavbarSearchButton} 
              ${focusSearch && styles.FocusSearch}`}
              aria-label="Onderdeel zoeken"
              href={`/onderdelen/pagina/1?onderdeel=${inputRef?.current?.value}`}
            >
              <MagnifyingGlass
                className={styles.NavbarSearchIcon}
                color={Colors.WHITE}
              />
            </Link>
            <form method="GET" action="/onderdelen/zoeken/1">
              <input
                ref={inputRef}
                name="onderdeel"
                onFocus={() => setFocusSearch(true)}
                onBlur={() => setFocusSearch(false)}
                className={`${styles.NavbarSearch} navbar-search`}
                placeholder="Onderdelen zoeken"
              />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

function MobileNavExpanded(props) {
  const pathname = usePathname();
  const [dropdown, setDropdown] = React.useState(false);

  return (
    <>
      <Container
        className={`${styles.NavbarMobileNavContainer} 
        ${props.open && styles.NavbarMobileOpen}
        ${props.vacation && styles.MobileVacation}`}
        paddingVert="30px"
      >
        <div className={styles.NavbarMobileNavWrapper}>
          <NavbarLink href="/" text="Home" active={pathname == "/"} />
          <button
            href="#"
            onClick={() => setDropdown(!dropdown)}
            className={`${styles.NavbarDropdownButtonMobile} ${styles.NavbarLink}`}
          >
            <div className={styles.NavbarDropdownButton}>
              Over ons <Chevron width={14} />
            </div>
          </button>
          <div
            className={`${styles.NavbarDropdownMobile} ${
              dropdown ? styles.NavbarDropdownActive : ""
            }`}
          >
            <NavbarLink href="/overons" text="Over ons" />
            <NavbarLink href="/dsg-revisie" text="DSG revisie" />
            <NavbarLink href="/ecu-reparatie" text="ECU reparatie" />
            <NavbarLink href="/ecu-revisie" text="ECU revisie" />
            <NavbarLink href="/ecu-testen" text="ECU testen" />
            <NavbarLink
              href="/mechatronic-reparatie"
              text="Mechatronic reparatie"
            />
            <NavbarLink
              href="/mercedes-contactslot-reparatie"
              text="Mercedes contactslot reparatie"
            />
            {/* <NavbarLink
              href="/hybride-accu-reparatie"
              text="Hybride accu reparatie"
            />
            <NavbarLink
              href="/hybride-accu-revisie"
              text="Hybride accu revisie"
            />
            <NavbarLink
              href="/mechatronic-revisie"
              text="Mechatronic revisie"
            />

            <NavbarLink
              href="/mercedes-contactslot-revisie"
              text="Mercedes contactslot revisie"
            /> */}
          </div>
          <NavbarLink
            href="/onderdelen/pagina/1"
            text="Onderdelen"
            active={pathname.includes("/onderdelen")}
          />
          <NavbarLink
            href="https://www.reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
            text="Reparatieformulier"
            target="_blank"
          />
          <NavbarLink
            href="/nieuws"
            text="Nieuws"
            active={pathname.includes("/nieuws")}
          />
          <NavbarLink
            href="/contact"
            text="Contact"
            active={pathname == "/contact"}
          />
        </div>
      </Container>

      {props.open && (
        <div
          onClick={() => props.setOpen(false)}
          className={styles.NavbarMobileNavBackground}
        />
      )}
    </>
  );
}

function NavbarLink(props) {
  return (
    <TextLink
      href={props.href}
      text={props.text}
      color={Colors.WHITE}
      hoverColor={Colors.RED}
      className={styles.NavbarLink}
      bar={props.active}
      target={props.target}
    />
  );
}
