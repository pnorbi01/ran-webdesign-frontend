import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, Button, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import logo from "./images/logo.png";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const initialLocale = Cookies.get("locale");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([initialLocale]));
  const [t, i18n] = useTranslation('global');

  const handleChangeLanguage = (lang) => {
    Cookies.set("locale", lang)
    i18n.changeLanguage(lang)
  };

  const menuItems = [
    "about",
    "skill",
    "project",
    "contact"
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

  const scrollToContent = (div) => {
    const section = document.querySelector(`${div}`);
    if(section) {
      const yOffset = section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

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

  window.onscroll = function() {
    scroll()
  };

  function scroll() {
    const navbar = document.querySelector(".navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
    } else {
        navbar.style.boxShadow = "none";
    }
  }

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="navbar backdrop-blur fixed bg-transparent">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo} alt="RAN Webdesign logo" width={40} height={40} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link href="#" className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all" onClick={(e) => handleClickOnWeb('.about', e)}>
            {t('navbar.about')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all" onClick={(e) => handleClickOnWeb('.skill', e)}>
            {t('navbar.skill')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all" onClick={(e) => handleClickOnWeb('.project', e)}>
            {t('navbar.project')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="navbar-item text-sm text-grey-500 font-bold hover:text-blue-600 hover:cursor-pointer transition-all" onClick={(e) => handleClickOnWeb('.contact', e)}>
            {t('navbar.contact')}
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
              aria-label="Single selection"
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
                  startContent={<Avatar alt="English" className="w-6 h-6" src="https://flagcdn.com/gb.svg" onClick={() => handleChangeLanguage('en')} />}
                  onClick={() => handleChangeLanguage('en')}
                  textValue="en"
                >
                  <span className="text-sm text-grey-500 font-bold">English</span>
                </DropdownItem>
                <DropdownItem 
                  key="hu"
                  startContent={<Avatar alt="Hungary" className="w-6 h-6" src="https://flagcdn.com/hu.svg" onClick={() => handleChangeLanguage('hu')} />}
                  onClick={() => handleChangeLanguage('hu')}
                  textValue="hu"
                >
                  <span className="text-sm text-grey-500 font-bold">Hungarian</span>
                </DropdownItem>
                <DropdownItem 
                  key="sr"
                  startContent={<Avatar alt="Serbia" className="w-6 h-6" src="https://flagcdn.com/rs.svg" onClick={() => handleChangeLanguage('sr')} />}
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
              className="w-full text-grey-500 font-bold text-2xl gap-3"
              href="#"
              size="lg"
              onClick={(e) => handleClickOnPhone('.'+item, e)}
            >
              {t('navbar.'+ item)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
