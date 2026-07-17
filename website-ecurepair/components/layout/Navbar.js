"use client"; // TODO: Fix
import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Axios from "axios";

import { Spin as Hamburger } from "hamburger-react";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import TextLink from "@/components/text/TextLink";

import Background from "@/assets/img/navbar-bg.jpg";
import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";
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
          className={`relative left-0 z-[998] h-31.25 w-full [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),50%_100%,0_calc(100%-30px))] lg:h-37.5 xl:[clip-path:polygon(0_0,100%_0,100%_calc(100%-65px),50%_100%,0_calc(100%-65px))] 2xl:h-43.75 ${
            vacation.enabled ? "top-5" : "top-0"
          }`}
        >
          <Image
            src={Background}
            fill
            sizes="100vw"
            placeholder="blur"
            alt="Navbar"
            className="-z-10 object-cover"
          />
          <div className="absolute z-0 h-full w-full bg-black/75" />
        </div>
      )}
      <MobileNavExpanded open={isOpen} setOpen={setOpen} />

      {vacation.enabled && (
        <div className="fixed top-0 z-[1001] flex w-full justify-center bg-red px-5 py-2 text-center text-white xxs:px-10 xxs:py-3.75">
          {vacation.text}
        </div>
      )}
      <Container
        className={`fixed z-[1000] min-w-75 border-b transition-all duration-300 ease-in-out ${
          showNavbar
            ? isOpen
              ? "border-transparent bg-gray"
              : "border-darkgray bg-darkgray/[98.5%]"
            : "border-transparent bg-transparent"
        } ${vacation.enabled ? "top-11.5" : "top-0"}`}
        paddingVert="15px"
      >
        <div className="z-[1000] flex h-auto w-full items-center justify-between lg:h-18.75">
          <NavbarLink
            href="/"
            text="Home"
            active={pathname == "/"}
            className="hidden lg:flex"
          />
          <div className="group hidden h-26.5 flex-col justify-center lg:flex">
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
                <div className="flex items-center gap-1">
                  Over ons <FaChevronDown size={14} />
                </div>
              }
            />
            <div
              className={`pointer-events-none absolute -ml-7.5 flex flex-col gap-2.5 bg-darkgray/[98.5%] px-7.5 pb-6.25 opacity-0 transition-all duration-300 ease-in-out group-hover:pointer-events-auto group-hover:opacity-100 ${
                showNavbar ? "top-26.5 pt-2.5" : "top-21.25 pt-5"
              }`}
            >
              <NavbarLink href="/overons" text="Over ons" />
              <NavbarLink href="/dsg-revisie" text="DSG revisie" />
              <NavbarLink href="/ecu-reparatie" text="ECU reparatie" />
              <NavbarLink href="/ecu-revisie" text="ECU revisie" />
              <NavbarLink href="/ecu-testen" text="ECU testen" />
              <NavbarLink
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
                href="/mercedes-contactslot-reparatie"
                text="Mercedes contactslot reparatie"
              />
              <NavbarLink
                href="/mercedes-contactslot-revisie"
                text="Mercedes contactslot revisie"
              />
            </div>
          </div>
          <NavbarLink
            href="/onderdelen/pagina/1"
            text="Onderdelen"
            active={pathname.includes("/onderdelen")}
            className="hidden lg:flex"
          />
          <NavbarLink
            href="https://www.reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
            text="Reparatieformulier"
            target="_blank"
            className="hidden lg:flex"
          />
          <NavbarLink
            href="/nieuws"
            text="Nieuws"
            active={pathname.includes("/nieuws")}
            className="hidden lg:flex"
          />
          <NavbarLink
            href="/contact"
            text="Contact"
            active={pathname == "/contact"}
            className="hidden lg:flex"
          />
          <div className="flex w-1/4 items-center lg:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color={Colors.WHITE}
              label="Toggle navigatiebalk"
            />
          </div>

          <div className="flex w-3/4 max-w-75 items-center bg-white/15 text-gray-400 lg:w-50 lg:max-w-none 2xl:w-75 [&>form]:w-full">
            <Link
              className={`hover flex h-9 w-12 items-center justify-center border-0 border-b bg-transparent p-0 transition-all duration-300 ease-in-out 2xl:h-12.5 2xl:w-14 ${
                focusSearch ? "border-red" : "border-transparent"
              }`}
              aria-label="Onderdeel zoeken"
              href={`/onderdelen/pagina/1?onderdeel=${inputRef?.current?.value}`}
            >
              <FaMagnifyingGlass className="h-auto w-3.5 text-white 2xl:w-4.5" />
            </Link>
            <form method="GET" action="/onderdelen/zoeken/1">
              <input
                ref={inputRef}
                name="onderdeel"
                onFocus={() => setFocusSearch(true)}
                onBlur={() => setFocusSearch(false)}
                className="navbar-search h-9 w-full border-0 border-b border-transparent bg-transparent px-0 py-2 text-base font-[family-name:lato] font-medium transition-all duration-300 ease-in-out 2xl:h-12.5 2xl:py-3 2xl:text-xl"
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
        className={`fixed z-[999] h-full w-full overflow-x-hidden overflow-y-auto bg-gray shadow-[0px_0px_10px_5px_#00000040] transition-all duration-300 ease-in-out md:w-75 lg:hidden ${
          props.open ? "translate-x-0" : "-translate-x-full"
        } ${props.vacation ? "top-5" : "top-0"}`}
        paddingVert="30px"
      >
        <div className="mt-20 flex w-full flex-col gap-7.5 pl-2.5">
          <NavbarLink href="/" text="Home" active={pathname == "/"} />
          <button
            onClick={() => setDropdown(!dropdown)}
            className="m-0 border-0 bg-transparent p-0 text-xl text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-red"
          >
            <div className="flex items-center gap-1">
              Over ons <FaChevronDown size={14} />
            </div>
          </button>
          <div
            className={`-mt-5 -mb-2.5 flex flex-col gap-3.75 overflow-hidden px-5 transition-all duration-300 ease-in-out ${
              dropdown ? "max-h-250" : "max-h-0"
            }`}
          >
            <NavbarLink href="/overons" text="Over ons" />
            <NavbarLink href="/dsg-revisie" text="DSG revisie" />
            <NavbarLink href="/ecu-reparatie" text="ECU reparatie" />
            <NavbarLink href="/ecu-revisie" text="ECU revisie" />
            <NavbarLink href="/ecu-testen" text="ECU testen" />
            <NavbarLink
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
              href="/mercedes-contactslot-reparatie"
              text="Mercedes contactslot reparatie"
            />
            <NavbarLink
              href="/mercedes-contactslot-revisie"
              text="Mercedes contactslot revisie"
            />
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
          className="fixed z-[997] h-full w-full lg:hidden"
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
      className={`text-xl text-white hover:text-red lg:text-base xl:text-xl ${
        props.className || ""
      }`}
      bar={props.active}
      target={props.target}
    />
  );
}
