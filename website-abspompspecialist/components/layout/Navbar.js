import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { Spin as Hamburger } from "hamburger-react";

import styles from "@/styles/layout/Navbar.module.scss";

import Colors from "@/styles/Colors";
import Breakpoints from "@/styles/Breakpoints";
import UseDimensions from "@/services/UseDimensions";

import Container from "@/components/containers/Container";

import TextLink from "@/components/text/TextLink";

import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Background from "@/assets/img/navbar-bg.jpg";

export default function Navbar(props) {
  const router = useRouter();

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
        <div className={styles.NavbarBackground}>
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
      <Container
        className={`${styles.NavbarContainer} 
        ${showNavbar && styles.ShowNavbar} 
        ${isOpen && styles.isOpen}`}
        paddingVert="15px"
        background="transparent"
      >
        <div className={styles.NavbarWrapper}>
          <NavbarLink href="/" text="Home" active={router.pathname == "/"} />
          <NavbarLink
            href="/overons"
            text="Over ons"
            active={router.pathname == "/overons"}
          />
          <NavbarLink
            href="/reparaties"
            text="Reparaties"
            active={
              router.pathname.includes("/reparaties") ||
              router.pathname == "/reparatieformulier"
            }
          />
          <NavbarLink
            href="/foutcodes"
            text="Foutcodes"
            active={
              router.pathname.includes("/foutcodes") ||
              router.pathname.includes("/fouten/")
            }
          />
          <NavbarLink
            href="/contact"
            text="Contact"
            active={router.pathname == "/contact"}
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
              href={`/reparaties?onderdeel=${inputRef?.current?.value}`}
            >
              <MagnifyingGlass
                className={styles.NavbarSearchIcon}
                color={Colors.WHITE}
              />
            </Link>
            <form method="GET" action="/reparaties">
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
  const size = UseDimensions();
  const router = useRouter();

  return (
    <>
      <Container
        className={`${styles.NavbarMobileNavContainer} 
        ${props.open && styles.NavbarMobileOpen}`}
        paddingVert="30px"
      >
        <div className={styles.NavbarMobileNavWrapper}>
          <NavbarLink href="/" text="Home" active={router.pathname == "/"} />
          <NavbarLink
            href="/overons"
            text="Over ons"
            active={router.pathname == "/overons"}
          />
          <NavbarLink
            href="/reparaties"
            text="Reparaties"
            active={router.pathname.includes("/reparaties")}
          />
          <NavbarLink
            href="/foutcodes"
            text="Foutcodes"
            active={router.pathname.includes("/foutcodes")}
          />
          <NavbarLink
            href="/contact"
            text="Contact"
            active={router.pathname == "/contact"}
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
