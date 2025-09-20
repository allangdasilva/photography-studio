"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/ui/header/button-menu";
import NavLinks from "@/app/ui/header/nav-links";
import MenuInfos from "@/app/ui/header/menu-infos";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-primaryColor flex items-center justify-between p-6">
      {/* Nav */}
      <NavLinks textColor="nav-desktop" className="hidden min-sm:block" />

      {/* Logo */}
      <Link
        className="hover:scale-95 focus:scale-95 transition-transform duration-700"
        href={"/"}
      >
        <Image
          src={"/images/logo-p-photography-studio-white.svg"}
          width={43}
          height={48}
          alt={"Logo Photography Studio"}
          className="block dark:hidden"
        />
        <Image
          src={"/images/logo-p-photography-studio-black.svg"}
          width={43}
          height={48}
          alt={"Logo Photography Studio"}
          className="hidden dark:block"
        />
      </Link>

      {/* Menu */}
      <Button
        aria-label={"Abrir menu de informações"}
        aria-controls={"info-menu"}
        aria-expanded={!isOpen ? false : true}
        aria-hidden={isOpen}
        tabIndex={!isOpen ? 0 : -1}
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-end gap-2 w-11 py-2 cursor-pointer group *:transition-transform *:duration-700"
      >
        <span
          aria-hidden="true"
          className="block w-full h-[1px] bg-background origin-right group-hover:scale-x-75 group-focus:scale-x-75"
        ></span>
        <span
          aria-hidden="true"
          className="block w-full h-[1px] bg-background origin-left group-hover:scale-x-75 group-focus:scale-x-75"
        ></span>
      </Button>

      <MenuInfos setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
}
