"use client";

import Image from "next/image";
import hoverEffect from "hover-effect";
import { useRef, useEffect } from "react";

export default function Hero() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentRef.current) return;

    const myAnimation = new hoverEffect({
      parent: parentRef.current,
      intensity: 0.3,
      image1: "/images/moda/moda-1.jpg",
      image2: "/images/moda/moda-2.jpg",
      displacementImage: "/images/displacement/4.png",
      imagesRatio: 3001 / 2401,
    });

    return () => {
      if (parentRef.current) parentRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full bg-gradient-to-b pt-36 pb-[72px] from-primaryColor to-secondaryColor -z-10">
      <div className="relative flex w-full px-10">
        <div className="m-auto overflow-hidden">
          <div
            ref={parentRef}
            className="w-full h-[452px] aspect-[11/16]"
          ></div>
        </div>

        <div className="absolute w-full max-w-[580px] p-6 left-1/2 top-1/2 -translate-1/2 -translate-x-1/2 mix-blend-difference">
          <Image
            className="w-full h-full object-cover"
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
