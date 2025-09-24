"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/app/ui/header/button-menu";
import NavLinks from "@/app/ui/header/nav-links";
import StudioInfos from "@/app/ui/studio-infos";
import { menuGallery } from "@/app/lib/imagesData";
import useCloseMenuInfos from "@/app/hooks/useCloseMenuInfos";

interface MenuInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function MenuInfos({ setIsOpen, isOpen }: MenuInfoProps) {
  const menuRef = React.useRef<HTMLDivElement>(null);

  // tabIndex
  React.useEffect(() => {
    if (menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        "button, [href], input, select, textarea"
      );
      focusableElements.forEach((el) => {
        if (!isOpen) {
          el.setAttribute("tabIndex", "-1");
        } else {
          menuRef.current?.focus();
          el.removeAttribute("tabIndex");
        }
      });
    }
  }, [isOpen]);

  // Close MenuInfos / Click Outside / Esc keyboard
  useCloseMenuInfos(menuRef, isOpen, () => setIsOpen(false));

  return (
    <>
      <div
        aria-hidden="true"
        tabIndex={-1}
        className={clsx(
          "fixed w-full h-screen top-0 left-0 z-40 transition-transform duration-700 ease-out bg-black/50 dark:bg-white/20",
          {
            "translate-x-full": !isOpen,
            "translate-x-0": isOpen,
          }
        )}
      ></div>
      <div
        id="info-menu"
        ref={menuRef}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        role="dialog"
        aria-modal={isOpen}
        className={clsx(
          "fixed overflow-auto top-0 right-0 w-full h-screen bg-background z-50 min-sm:w-3/5 min-lg:w-2/5 transition-transform duration-700 ease-out scrollbarMenuInfos",
          { "translate-x-full": !isOpen, "translate-x-0": isOpen }
        )}
      >
        {/* Nav */}
        <div className="flex flex-col items-center gap-6 p-6 pb-10">
          <div className="flex gap-6 items-center self-end">
            <span className="fontHeadline">Fechar</span>
            <Button
              aria-label={"Fechar menu de informações"}
              onClick={() => setIsOpen(!isOpen)}
              className="aspect-square relative flex flex-col justify-center items-end gap-2 w-11 py-2 cursor-pointer group *:transition-transform *:duration-700"
            >
              <span
                aria-hidden={true}
                className="absolute block w-full h-[1px] rotate-45 bg-textNavMobileColor  group-hover:scale-x-75 group-focus:scale-x-75"
              ></span>
              <span
                aria-hidden={true}
                className="absolute block w-full h-[1px] -rotate-45 bg-textNavMobileColor  group-hover:scale-x-75 group-focus:scale-x-75"
              ></span>
            </Button>
          </div>
          <NavLinks textColor="nav-mobile" className="min-sm:hidden" />
        </div>

        {/* Logo */}
        <Link
          className="block ml-6 mr-6 hover:scale-95 focus:scale-95 transition-transform duration-700"
          href={"/"}
        >
          <Image
            src={"/images/logo-photography-studio-black.svg"}
            width={430}
            height={40}
            alt={"Logo Photography Studio"}
            className="block dark:hidden m-auto"
          />
          <Image
            src={"/images/logo-photography-studio-white.svg"}
            width={430}
            height={40}
            alt={"Logo Photography Studio"}
            className="hidden dark:block m-auto"
          />
        </Link>

        {/* Social */}
        <div className="text-center p-6 pb-3 pt-10 min-sm:pb-5">
          <h2 className="fontHeadline">Instagram</h2>
          <a
            className="fontBody hover:text-primaryColor focus:text-primaryColor transition-colors duration-300"
            href="#"
          >
            @photography
          </a>
        </div>

        {/* Gallery */}
        <div>
          <ul className="grid grid-cols-5">
            <li className="hidden" aria-hidden="true"></li>

            <li className="col-start-2 col-end-5">
              <ul className="grid grid-cols-3 gap-3 min-sm:gap-5">
                {menuGallery.map(({ src, width, height, alt, id }) => (
                  <li key={id}>
                    <div className="flex items-center aspect-square overflow-hidden">
                      <Image
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                        sizes="40vw"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </li>

            <li className="hidden" aria-hidden="true"></li>
          </ul>
        </div>

        {/* StudioInfos */}
        <StudioInfos />
      </div>
    </>
  );
}
