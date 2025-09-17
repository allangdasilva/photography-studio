"use client";

import Button from "@/app/ui/header/button-menu";
import NavLinks from "@/app/ui/header/nav-links";
import Image from "next/image";
import React from "react";
import FormInfo from "../form-info";

export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0  w-full h-screen bg-green-500">
      {/* Nav */}
      <div className="flex justify-between items-center">
        <NavLinks />
        <div>
          <span>Fechar</span>
          <Button
            ariaLabel={"Abrir menu de informação"}
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
        </div>
      </div>

      {/* Logo */}
      <Image
        src={"/images/logo-p-photography-studio-black.svg"}
        width={43}
        height={48}
        alt={"Logo Photography Studio"}
        className="hidden dark:block"
      />

      {/* Social */}
      <div>
        <h2>Instagram</h2>
        <a href="">@photography</a>
      </div>

      {/* Gallery */}
      <div>
        <ul></ul>
      </div>

      {/* Form */}
      <FormInfo />
    </div>
  );
}
