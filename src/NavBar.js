import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, Button, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const initialLocale = Cookies.get("locale");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([initialLocale]));
  const [t, i18n] = useTranslation('global');

  const handleChangeLanguage = (lang) => {
    Cookies.set("locale", lang)
    i18n.changeLanguage(lang)
    console.log(Cookies.get("locale"))
  };

  const menuItems = [
    "About us",
    "Skills",
    "Projects",
    "Contact"
  ];

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
          <Avatar alt={selectedCountryName} className="w-6 h-6" src={selectedFlagSrc} /> {selectedCountryName}
        </div>
      );
    }
  
    return ''; // Empty string, if nothing is selected
  }, [selectedKeys]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar backdrop-blur fixed bg-transparent">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-extrabold text-xl text-inherit">RAN</p>
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
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-sm text-grey-500 font-bold hover:text-blue-600 hover:tracking-wide hover:cursor-pointer transition-all">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light" 
                className="capitalize"
              >
                <span className="text-sm text-grey-500 font-bold">{selectedValue}</span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={true}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownSection title="Languages">
                <DropdownItem 
                  key="en"
                  startContent={<Avatar alt="English" className="w-6 h-6" src="https://flagcdn.com/gb.svg" />}
                  onClick={() => handleChangeLanguage('en')}
                  textValue="en"
                >
                  <span className="text-sm text-grey-500 font-bold">English</span>
                </DropdownItem>
                <DropdownItem 
                  key="hu"
                  startContent={<Avatar alt="Hungary" className="w-6 h-6" src="https://flagcdn.com/hu.svg" />}
                  onClick={() => handleChangeLanguage('hu')}
                  textValue="hu"
                >
                  <span className="text-sm text-grey-500 font-bold">Hungarian</span>
                </DropdownItem>
                <DropdownItem 
                  key="sr"
                  startContent={<Avatar alt="Serbia" className="w-6 h-6" src="https://flagcdn.com/rs.svg" />}
                  onClick={() => handleChangeLanguage('sr')}
                  textValue="sr"
                >
                  <span className="text-sm text-grey-500 font-bold">Serbian</span>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full text-grey-500 font-bold"
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
