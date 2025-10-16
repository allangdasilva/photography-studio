"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  function scrollToTop(duration = 600) {
    const start = window.scrollY;
    const startTime = performance.now();

    function animateScroll(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }
  return (
    <button
      onClick={() => scrollToTop()}
      type="button"
      aria-label="Voltar ao topo da página"
      className={clsx(
        "fixed m-6 bottom-0 right-0 w-10 h-10 rounded-full cursor-pointer z-[9999] bg-black dark:bg-white hover:bg-primaryColor focus-visible:bg-primaryColor after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url('/images/chevron-top-icon-white.svg')] dark:after:bg-[url('/images/chevron-top-icon-black.svg')] after:bg-center after:bg-no-repeat transition-all duration-300 ease-in-out",
        { "translate-y-0": isVisible, "translate-y-[72px]": !isVisible }
      )}
    ></button>
  );
}
