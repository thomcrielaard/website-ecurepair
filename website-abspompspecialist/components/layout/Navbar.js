import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Spin as Hamburger } from "hamburger-react";

import Colors from "@/styles/Colors";
import Breakpoints from "@/styles/Breakpoints";
import UseDimensions from "@/services/UseDimensions";

import Container from "@/components/containers/Container";

import TextLink from "@/components/text/TextLink";

import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Background from "@/assets/img/navbar-bg.jpg";

export default function Navbar(props) {
  const size = UseDimensions();
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleScroll = () => {
    setShowNavbar(window.scrollY > 30);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return size.width < Breakpoints.sm ? (
    <MobileNavbar transparent={props.transparent} showNavbar={showNavbar} />
  ) : (
    <DesktopNavbar transparent={props.transparent} showNavbar={showNavbar} />
  );
}

function DesktopNavbar(props) {
  const size = UseDimensions();
  const router = useRouter();
  const [focusSearch, setFocusSearch] = React.useState(false);

  return (
    <>
      {!props.transparent && (
        <div
          style={{
            position: "relative",
            zIndex: 998,
            top: 0,
            left: 0,
            width: "100%",
            height:
              size.width < Breakpoints.sm
                ? 125
                : size.width < Breakpoints.lg
                ? 150
                : 175,
            clipPath:
              size.width < Breakpoints.md
                ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))"
                : "polygon(0 0, 100% 0, 100% calc(100% - 65px), 50% 100%, 0 calc(100% - 65px))",
          }}
        >
          <Image
            src={Background}
            fill
            sizes="100vw"
            placeholder="blur"
            alt="Navbar"
            style={{ objectFit: "cover", zIndex: -1 }}
          />
          <div
            style={{
              position: "absolute",
              zIndex: 0,
              backgroundColor: `${Colors.BLACK}BB`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
      <Container
        paddingVert="15px"
        background="transparent"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backgroundColor: props.showNavbar
            ? `${Colors.DARKGRAY}FA`
            : "transparent",
          borderBottom: `1px solid ${
            props.showNavbar ? Colors.DARKGRAY : "transparent"
          }`,
          transition: "all .3s ease-in-out",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 75,
          }}
        >
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
          <div
            style={{
              width:
                size.width < Breakpoints.lg
                  ? 200
                  : size.width < Breakpoints.xl
                  ? 300
                  : 400,
              color: Colors.MEDIUMWHITE,
              backgroundColor: `${Colors.WHITE}25`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              className="hover"
              style={{
                width: size.width < Breakpoints.lg ? 48 : 56,
                height: size.width < Breakpoints.lg ? 36 : 50,
                border: 0,
                borderBottom: `1px solid ${
                  focusSearch ? Colors.RED : "transparent"
                }`,
                padding: 0,
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all .3s ease-in-out",
              }}
              onClick={() => {}}
              aria-label="Onderdeel zoeken"
            >
              <MagnifyingGlass
                width={size.width < Breakpoints.lg ? 14 : 18}
                color={Colors.WHITE}
              />
            </button>
            <input
              onFocus={() => setFocusSearch(true)}
              onBlur={() => setFocusSearch(false)}
              className="navbar-search"
              style={{
                backgroundColor: "transparent",
                padding: size.width < Breakpoints.lg ? "8px 0" : "12px 0",
                height: size.width < Breakpoints.lg ? 36 : 50,
                border: 0,
                borderBottom: "1px solid transparent",
                transition: "all .3s ease-in-out",
                fontFamily: "lato",
                fontWeight: 500,
                fontSize: size.width < Breakpoints.lg ? "1rem" : "1.25rem",
                width: "100%",
              }}
              placeholder="Onderdelen zoeken"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

function MobileNavbar(props) {
  const [isOpen, setOpen] = React.useState(false);
  const size = UseDimensions();
  const [focusSearch, setFocusSearch] = React.useState(false);

  return (
    <>
      {!props.transparent && (
        <div
          style={{
            position: "relative",
            zIndex: 998,
            top: 0,
            left: 0,
            width: "100%",
            height:
              size.width < Breakpoints.sm
                ? 125
                : size.width < Breakpoints.lg
                ? 150
                : 175,
            clipPath:
              size.width < Breakpoints.md
                ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))"
                : "polygon(0 0, 100% 0, 100% calc(100% - 65px), 50% 100%, 0 calc(100% - 65px))",
          }}
        >
          <Image
            src={Background}
            fill
            sizes="100vw"
            placeholder="blur"
            alt="Navbar"
            style={{ objectFit: "cover", zIndex: -1 }}
          />
          <div
            style={{
              position: "absolute",
              zIndex: 0,
              backgroundColor: `${Colors.BLACK}BB`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
      <MobileNavExpanded open={isOpen} setOpen={setOpen} />
      <Container
        paddingVert="15px"
        background="transparent"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          minWidth: 300,
          backgroundColor: props.showNavbar
            ? isOpen
              ? Colors.GRAY
              : `${Colors.DARKGRAY}FA`
            : "transparent",
          borderBottom: `1px solid ${
            !isOpen && props.showNavbar ? Colors.DARKGRAY : "transparent"
          }`,
          transition: "all .3s ease-in-out",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            zIndex: 1000,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} color={Colors.WHITE} />
          </div>
          {/* <div
            style={{
              width: "75%",
              maxWidth: 300,
              color: Colors.MEDIUMWHITE,
              backgroundColor: `${Colors.WHITE}25`,
              display: "flex",
              alignItems: "center",
              height: 42,
            }}
          >
            <button
              className="hover"
              style={{
                width: 48,
                height: 28,
                border: 0,
                padding: 0,
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {}}
              aria-label="Onderdeel zoeken"
            >
              <MagnifyingGlass
                width={size.width < Breakpoints.lg ? 14 : 18}
                color={Colors.WHITE}
              />
            </button>
            <input
              className="navbar-search"
              style={{
                backgroundColor: "transparent",
                height: 28,
                padding: "6px 0",
                border: 0,
                fontFamily: "lato",
                fontWeight: 500,
                fontSize: "1em",
                width: "100%",
              }}
              placeholder="Onderdelen zoeken"
            />
          </div> */}

          <div
            style={{
              width: "75%",
              maxWidth: 300,
              color: Colors.MEDIUMWHITE,
              backgroundColor: `${Colors.WHITE}25`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              className="hover"
              style={{
                width: 48,
                height: 36,
                border: 0,
                borderBottom: `1px solid ${
                  focusSearch ? Colors.RED : "transparent"
                }`,
                padding: 0,
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all .3s ease-in-out",
              }}
              onClick={() => {}}
              aria-label="Onderdeel zoeken"
            >
              <MagnifyingGlass
                width={size.width < Breakpoints.lg ? 14 : 18}
                color={Colors.WHITE}
              />
            </button>
            <input
              onFocus={() => setFocusSearch(true)}
              onBlur={() => setFocusSearch(false)}
              className="navbar-search"
              style={{
                backgroundColor: "transparent",
                padding: "8px 0",
                height: 36,
                border: 0,
                borderBottom: "1px solid transparent",
                transition: "all .3s ease-in-out",
                fontFamily: "lato",
                fontWeight: 500,
                fontSize: "1rem",
                width: "100%",
              }}
              placeholder="Onderdelen zoeken"
            />
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
        style={{
          height: "100%",
          position: "fixed",
          top: 0,
          width: size.width < Breakpoints.xs ? "100%" : 300,
          backgroundColor: Colors.GRAY,
          transform: props.open ? "translateX(0)" : "translateX(-100%)",
          transition: ".3s",
          transitionTimingFunction: "ease-in-out",
          zIndex: 999,
          boxShadow: "0px 0px 10px 5px #00000040",
          overflow: "hidden",
        }}
        paddingVert="30px"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginTop: 80,
            gap: 30,
            paddingLeft: 10,
          }}
        >
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

      {size.width >= Breakpoints.xs && props.open && (
        <div
          onClick={() => props.setOpen(false)}
          style={{
            height: "100%",
            position: "fixed",
            width: "100%",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
}

function NavbarLink(props) {
  const size = UseDimensions();
  return (
    <TextLink
      href={props.href}
      text={props.text}
      color={Colors.WHITE}
      hoverColor={Colors.RED}
      fontSize={
        size.width < Breakpoints.sm
          ? "1.25rem"
          : size.width < Breakpoints.lg
          ? "1rem"
          : "1.25rem"
      }
      fontWeight={600}
      fontFamily="lato"
      bar={props.active}
    />
  );
}
