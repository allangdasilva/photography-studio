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
    <header className="absolute top-0 left-0 w-full grid grid-cols-5 gap-5 p-6 min-sm:grid-cols-12">
      {/* Nav */}
      <NavLinks
        textColor="nav-desktop"
        className="hidden col-start-1 col-end-4 min-sm:block"
      />

      {/* Logo */}
      <Link
        className="col-start-1 col-end-3 hover:scale-95 focus:scale-95 transition-transform duration-400
        min-sm:col-start-6 min-sm:col-end-8 min-sm:justify-self-center"
        href={"/"}
      >
        <Image
          src={"/images/logo-p-photography-studio-white.svg"}
          width={43}
          height={48}
          alt={"Logo Photography Studio"}
          className="block dark:hidden"
          priority={true}
        />
        <Image
          src={"/images/logo-p-photography-studio-black.svg"}
          width={43}
          height={48}
          alt={"Logo Photography Studio"}
          className="hidden dark:block"
          priority={true}
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
        className="col-start-5 col-end-6 justify-self-end flex flex-col justify-center items-end gap-2 w-11 py-2 cursor-pointer group *:transition-transform *:duration-700
        min-sm:col-start-11 min-sm:col-end-13"
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
