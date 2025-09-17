"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@/app/ui/header/button-menu";
import NavLinks from "./nav-links";
import Menu from "./menu/menu";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-primaryColor flex items-center justify-between p-6">
      {/* Nav */}
      <NavLinks />

      {/* Logo */}
      <Link href={"/"}>
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
        ariaLabel={"Abrir menu de informação"}
        ariaControls={"info-menu"}
        ariaExpanded={!isOpen ? false : true}
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-end gap-2 w-11 py-2 cursor-pointer group *:transition-transform *:duration-700"
      >
        <span
          aria-hidden={true}
          className="block w-full h-[1px] bg-menuColor origin-right group-hover:scale-x-75"
        ></span>
        <span
          aria-hidden={true}
          className="block w-full h-[1px] bg-menuColor origin-left group-hover:scale-x-75"
        ></span>
      </Button>

      <Menu />
    </header>
  );
}
