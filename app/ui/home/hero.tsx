"use client";

import Image from "next/image";
import hoverEffect from "hover-effect";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Hero() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = parentRef.current;
    if (!wrapper) return;

    new hoverEffect({
      parent: wrapper,
      intensity: 0.3,
      image1: "/images/moda/moda-1.jpg",
      image2: "/images/moda/moda-2.jpg",
      displacementImage: "/images/displacement/4.png",
      imagesRatio: 3001 / 2401,
    });

    return () => {
      if (wrapper) wrapper.innerHTML = "";
    };
  }, []);

  useGSAP(() => {
    gsap.to(parentRef.current, {
      translateY: 0,
      duration: 1,
      delay: 2,
      ease: "power1",
    });
    gsap.to(imageRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 2.5,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full bg-gradient-to-b pt-36 pb-[72px] from-primaryColor to-secondaryColor -z-10">
      <div className="relative flex w-full px-10">
        <div className="m-auto overflow-hidden">
          <div
            ref={parentRef}
            className="w-full h-[452px] aspect-[11/16] translate-y-full"
          ></div>
        </div>

        <div className="absolute w-full max-w-[580px] px-6 left-1/2 top-1/2 -translate-1/2 -translate-x-1/2 mix-blend-difference overflow-hidden">
          <Image
            ref={imageRef}
            className="w-full h-full object-cover opacity-0"
            src={"/images/logo-photography-studio-white.svg"}
            width={546}
            height={52}
            alt="The Photography Studio"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
