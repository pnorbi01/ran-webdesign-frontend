import {
  Link,
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

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );

  const menuItems = [
    { name: "Home", value: "home" },
    { name: "Mobile app", value: "mobile" },
    { name: "Services", value: "services" },
    { name: "Skills", value: "skills" },
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
            href="/mobile"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
          >
            Mobile app
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/skills"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-column justify-center items-center h-full w-full bg-[#fbfbfdcc] bg-opacity-80 backdrop-saturate-[180%] backdrop-blur-[20px] gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full animate-[fadeIn_0.5s_ease-in-out] opacity-0 text-black-50 font-bold text-2xl text-center"
              href={"/" + item.value}
              size="lg"
              style={{
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
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
