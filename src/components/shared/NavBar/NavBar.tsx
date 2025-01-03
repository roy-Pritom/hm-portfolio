"use client";

import React, { useState } from "react";
// import { RiArrowDropDownLine } from 'react-icons/ri'
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import MobileMenuItem from "./MobileMenu";
import DesktopMenuItem from "./DesktopMenu";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Image from "next/image";

const menuItems = [
  { key: "1", name: "Home", link: "/" },
  { key: "2", name: "About Us", link: "/about" },
  {
    key: "3",
    name: "Gallery",
    link: "/gallery",
  },
  {
    key: "4",
    name: "Our Services",
    link: "#",
    children: [
      { key: "10", name: "Travel Agency", link: "/travel-agency" },
      { key: "11", name: "Tender Service", link: "/tender-service" },
      { key: "12", name: "Web Design And Development", link: "/web-design-and-development" },
      { key: "13", name: "Software Development", link: "/software-development" },
      { key: "14", name: "Import Export", link: "/import-export" },
      { key: "15", name: "HM WEDDINGS", link: "/hm-wedding" },
      { key: "16", name: "Visa Air Ticketing", link: "/visa-air-ticketing" },
      { key: "17", name: "Taatka Ltd", link: "/taatka" },
      { key: "18", name: "Manio Bd", link: "https://maniobd.com" },
      { key: "19", name: "Recruiting Agency", link: "/agency" }
    ]
  },
  { key: "5", name: "Contact Us", link: "/contact" },
  { key: "6", name: "FAQ", link: "/faq" },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
<div className="">
  {/* <div className="bg-primaryColor py-2">
    <div className="">
      <p></p>
    </div>
  </div> */}
<nav className="shadow-md w-full bg-white fixed top-0 z-50">
      <div className="container mx-auto">
        <div className="flex  items-center justify-between py-4">
          <div className="text-red-600 font-bold text-xl">
          <Image src='/logo.png' alt="logo" width={100} height={50} className="w-[100px] h-[50px]" />
          </div>
  

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <NavigationMenu className="w-full justify-between">
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <DesktopMenuItem key={item.key} item={item} />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="">

          <LanguageSwitcher />
          </div>

                  {/* Mobile menu button */}
                  <div className="flex lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-base hover:bg-transparent hover:text-primary focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <ScrollArea className="my-4 h-[calc(100vh-20px)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {menuItems.map((item) => (
                      <MobileMenuItem key={item.key} item={item} setOpen={setOpen} />
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
</div>
  );
};

export default NavBar;
