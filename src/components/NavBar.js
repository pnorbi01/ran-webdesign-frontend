import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );

  const menuItems = [
    { name: "Home", value: "home" },
    { name: "Mobile app", value: "mobile" },
    { name: "Contact", value: "contact" },
  ];

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
      navbar.style.backdropFilter = "saturate(180%) blur(20px)";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.backgroundColor = "transparent";
      navbar.style.backdropFilter = "none";
    }
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="navbar fixed bg-transparent"
    >
      <NavbarContent className="flex flex-row justify-between items-center">
        <NavbarBrand>
          <img src={logo} alt="RAN Webdesign logo" width={40} height={40} />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-[#8b98a5]"
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
            to="/home"
            className="navbar-item text-sm text-[#8b98a5] font-bold hover:text-slate-100 hover:cursor-pointer transition-all"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/mobile"
            className="navbar-item text-sm text-[#8b98a5] font-bold hover:text-slate-100 hover:cursor-pointer transition-all"
          >
            Mobile app
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/contact"
            className="navbar-item text-sm text-[#8b98a5] font-bold hover:text-slate-100 hover:cursor-pointer transition-all"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-column justify-center items-center h-full w-full bg-transparent backdrop-saturate-[180%] backdrop-blur-[20px] gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full animate-[fadeInBottom_0.5s_ease-in-out] opacity-0 text-[#8b98a5] font-bold text-2xl text-center"
              to={"/" + item.value}
              size="lg"
              style={{
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
              onClick={() => setIsMenuOpen()}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
