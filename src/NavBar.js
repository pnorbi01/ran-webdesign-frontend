import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About us",
    "Skills",
    "Projects"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="backdrop-blur fixed bg-transparent">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-xl text-inherit">RAN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link href="#" className="text-sm text-grey-500 font-bold hover:text-blue-600 hover:tracking-wide hover:cursor-pointer transition-all">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-sm text-grey-500 font-bold hover:text-blue-600 hover:tracking-wide hover:cursor-pointer transition-all">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-sm text-grey-500 font-bold hover:text-blue-600 hover:tracking-wide hover:cursor-pointer transition-all">
            Changelog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
