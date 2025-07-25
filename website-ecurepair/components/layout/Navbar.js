"use client"; // TODO: Fix
import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Spin as Hamburger } from "hamburger-react";

import styles from "@/styles/layout/Navbar.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import TextLink from "@/components/text/TextLink";

import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Background from "@/assets/img/navbar-bg.jpg";
import Chevron from "@/assets/svg/Chevron";

const vacation = false;

export default function Navbar(props) {
  const pathname = usePathname();

  const inputRef = React.useRef(null);

  const [isOpen, setOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [focusSearch, setFocusSearch] = React.useState(false);

  const handleScroll = () => {
    setShowNavbar(window.scrollY > 30);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {!props.transparent && (
        <div
          className={`${styles.NavbarBackground} 
        ${vacation && styles.BackgroundVacation}`}
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

      {vacation && (
        <div className={styles.NavbarVacation}>
          Wij zijn gesloten in verband met vakantie van 28 juni tot 21 juli.
        </div>
      )}
      <Container
        className={`${styles.NavbarContainer} 
        ${showNavbar && styles.ShowNavbar} 
        ${isOpen && styles.isOpen}
        ${vacation && styles.VacationContainer}`}
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
              <NavbarLink href="/dsg-reparatie" text="DSG reparatie" />
              <NavbarLink href="/ecu-reparatie" text="ECU reparatie" />
              <NavbarLink href="/mechatronics" text="Mechatronics" />
              <NavbarLink
                href="/mercedes-contactsloten"
                text="Mercedes contactsloten"
              />
              <NavbarLink href="/tellerklokken" text="Tellerklokken" />
            </div>
          </div>
          <NavbarLink
            href="/onderdelen/pagina/1"
            text="Onderdelen"
            active={pathname.includes("/onderdelen")}
          />
          <NavbarLink
            href="/reparatieformulier"
            text="Reparatieformulier"
            active={pathname == "/reparatieformulier"}
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
        ${vacation && styles.MobileVacation}`}
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
            <NavbarLink href="/dsg-reparatie" text="DSG reparatie" />
            <NavbarLink href="/ecu-reparatie" text="ECU reparatie" />
            <NavbarLink href="/mechatronics" text="Mechatronics" />
            <NavbarLink
              href="/mercedes-contactsloten"
              text="Mercedes contactsloten"
            />
            <NavbarLink href="/tellerklokken" text="Tellerklokken" />
          </div>
          <NavbarLink
            href="/onderdelen/pagina/1"
            text="Onderdelen"
            active={pathname.includes("/onderdelen")}
          />
          <NavbarLink
            href="/reparatieformulier"
            text="Reparatieformulier"
            active={pathname == "/reparatieformulier"}
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
    />
  );
}
