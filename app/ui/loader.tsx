"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Loader() {
  // const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const wrapper1Ref = useRef<HTMLDivElement | null>(null);
  const wrapper2Ref = useRef<HTMLDivElement | null>(null);
  const imageWhiteRef = useRef<HTMLImageElement | null>(null);
  const imageBlackRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(wrapper1Ref.current, {
          visibility: "hidden",
        });
      },
    });

    timeline
      .to(
        wrapper2Ref.current,
        {
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
        },
        0
      )
      .to(
        [imageWhiteRef.current, imageBlackRef.current],
        {
          translateY: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
        },
        0
      )
      .to(
        wrapper2Ref.current,
        {
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.in",
        },
        1
      )
      .to(
        [imageWhiteRef.current, imageBlackRef.current],
        {
          translateY: 100,
          duration: 1,
          delay: 0.2,
          ease: "power2.in",
        },
        1
      )
      .to(
        wrapper1Ref.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        2
      );
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      ref={wrapper1Ref}
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center p-6 bg-white dark:bg-black z-[99999]"
    >
      <div
        ref={wrapper2Ref}
        className="w-full h-full flex justify-center items-center opacity-0 bg-black dark:bg-white"
      >
        <div className="w-4/5 overflow-hidden">
          <Image
            ref={imageWhiteRef}
            className="block w-full translate-y-full dark:hidden"
            src={"/images/logo-photography-studio-white.svg"}
            width={430}
            height={40}
            alt=""
          />
          <Image
            ref={imageBlackRef}
            className="hidden w-full translate-y-full dark:block"
            src={"/images/logo-photography-studio-black.svg"}
            width={430}
            height={40}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
