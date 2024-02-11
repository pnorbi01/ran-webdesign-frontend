import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import logo from "./images/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );
  const [isScrolling, setIsScrolling] = React.useState(false);
  const initialLocale = Cookies.get("locale");
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([initialLocale])
  );
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    Cookies.set("locale", lang);
    i18n.changeLanguage(lang);
  };

  const menuItems = ["about", "skill", "project", "contact"];

  const selectedValue = React.useMemo(() => {
    const selectedItemKey = Array.from(selectedKeys)[0]; // First selected key

    if (selectedItemKey) {
      const selectedFlagSrc = {
        en: "https://flagcdn.com/gb.svg",
        hu: "https://flagcdn.com/hu.svg",
        sr: "https://flagcdn.com/rs.svg",
      }[selectedItemKey];
      const selectedCountryName = {
        en: "English",
        hu: "Hungarian",
        sr: "Serbian",
      }[selectedItemKey];

      return (
        <div className="flex flex-row justify-center items-center gap-1">
          <Avatar
            alt={selectedCountryName}
            className="w-6 h-6"
            src={selectedFlagSrc}
          />{" "}
          {selectedCountryName}
        </div>
      );
    }

    return ""; // Empty string, if nothing is selected
  }, [selectedKeys]);

  const scrollToContent = (div) => {
    const section = document.querySelector(`${div}`);
    if (section) {
      const yOffset =
        section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  const handleClickOnWeb = (scrollTo, event) => {
    scrollToContent(scrollTo);
    event.preventDefault();
  };

  const handleClickOnPhone = (scrollTo, event) => {
    setIsMenuOpen(false);
    setIsScrolling(true);

    setTimeout(() => {
      setIsScrolling(false);
      scrollToContent(scrollTo);
    }, 500);

    event.preventDefault();
  };

  window.onscroll = function () {
    scroll();
  };

  function scroll() {
    const navbar = document.querySelector(".navbar");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
      navbar.style.backgroundColor = "transparent";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.backgroundColor = "transparent";
    }
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="navbar fixed backdrop-saturate-[180%] backdrop-blur-[20px] bg-transparent"
    >
      <NavbarContent className="flex flex-row justify-between items-center">
        <NavbarBrand>
          <img src={logo} alt="RAN Webdesign logo" width={40} height={40} />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden w-full sm:flex gap-5" justify="center">
        <NavbarItem>
          <NavbarBrand>
            <img src={logo} alt="RAN Webdesign logo" width={40} height={40} />
          </NavbarBrand>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
            onClick={(e) => handleClickOnWeb(".about", e)}
          >
            {t("navbar.about")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
            onClick={(e) => handleClickOnWeb(".skill", e)}
          >
            {t("navbar.skill")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
            onClick={(e) => handleClickOnWeb(".project", e)}
          >
            {t("navbar.project")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
            onClick={(e) => handleClickOnWeb(".contact", e)}
          >
            {t("navbar.contact")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-column justify-center items-center h-full w-full bg-[#fbfbfdcc] bg-opacity-80 backdrop-saturate-[180%] backdrop-blur-[20px] gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full animate-[fadeIn_0.5s_ease-in-out] opacity-0 text-black-50 font-bold text-2xl text-center"
              href="#"
              size="lg"
              onClick={(e) => handleClickOnPhone("." + item, e)}
              style={{
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
            >
              {t("navbar." + item)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
