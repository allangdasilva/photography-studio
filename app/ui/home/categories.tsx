"use client";

import useReveal from "@/app/hooks/useReveal";
import { categoriesData } from "@/app/lib/categoriesData";
import clsx from "clsx";
import Link from "next/link";

export default function Categories() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className={clsx(
        "p-6 text-center min-sm:py-12 bg-background opacity-0 translate-y-16",
        {
          "revealEffect ": visible,
        }
      )}
    >
      <h2 className="fontHeadline">Categorias</h2>
      <div className="max-w-[1280px] m-auto">
        <h3 className="fontDisplay uppercase pt-3 pb-6 min-sm:pt-6 min-sm:pb-12">
          Somos Fotógrafos
          <br />
          <span className="fontDisplayItalic">Apaixonados</span>
        </h3>
        <div className="grid gap-5 min-sm:grid-cols-2 min-lg:grid-cols-4">
          {categoriesData.map(({ label, thumbnail, id }) => (
            <Link
              key={id}
              href={`/categorias/${label}`}
              className={`relative w-full aspect-[11/16] p-3 overflow-hidden group`}
            >
              <div
                aria-hidden="true"
                style={{ backgroundImage: `url('${thumbnail}')` }}
                className="absolute inset-0 bg-center bg-cover group-hover:scale-105 group-focus-visible:scale-105 transition-transform duration-700"
              ></div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/20 z-10 min-md:bg-black/40"
              ></div>

              <div aria-hidden="true" className="absolute inset-0 p-3 z-20">
                <div className="w-full h-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 ease-in-out bg-white"></div>
              </div>

              <div
                className="absolute top-1/2 -translate-y-1/2 left-1/2 
                -translate-x-1/2 z-30 overflow-hidden"
              >
                <p
                  style={{ color: "white" }}
                  className="fontHeadline capitalize translate-y-0 group-hover:!text-black group-focus-visible:!text-black transition-colors duration-500 ease-in-out"
                >
                  {label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
