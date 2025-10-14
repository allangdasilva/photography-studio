"use client";

import useReveal from "@/app/hooks/useReveal";
import clsx from "clsx";

const equipment = [
  "3 Câmeras 4K",
  "Kit completo de iluminação profissional",
  "Mesa de corte Blackmagic",
  "Microfones condensadores Audio Technica",
  "Microfones lapela HollylandK",
  "Console YAMAHA MG10",
  "Cenários com fundos neutros e opções decorativas",
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className={clsx(
        "p-6 min-sm:py-12 bg-background opacity-0 translate-y-16",
        {
          "revealEffect ": visible,
        }
      )}
    >
      <h2 className="text-center fontHeadline">Sobre</h2>

      <div className="max-w-[1280px] m-auto min-lg:grid min-lg:grid-cols-12 min-sm:gap-5">
        <div className="mt-3 space-y-1 min-sm:space-y-2 min-sm:mt-6 min-lg:col-span-6 min-lg:col-start-4">
          <h3 style={{ color: "var(--primaryColor)" }} className="fontDisplay">
            2020
          </h3>
          <p className="fontBody max-w-[65ch]">
            O [Nome Estúdio] é um estúdio de fotografia profissional. Atua há 5
            anos no mercado, localizado em [Cidade], especializado em
            [Especialidades].
          </p>
        </div>

        <div className="mt-8 space-y-1 min-sm:space-y-2 min-sm:mt-12 min-lg:col-span-6 min-lg:col-start-4 min-lg:row-start-2 min-md:grid min-md:grid-cols-6 min-md:gap-5">
          <h3
            style={{ fontWeight: "400", color: "var(--textDisplayColor)" }}
            className="fontHeadline text-background min-md:col-span-2"
          >
            Equipamentos &<br />
            Infraestutura
          </h3>
          <ul className="fontBody min-md:col-span-4">
            {equipment.map((item, index) => (
              <li
                className={
                  index === equipment.length - 1
                    ? "py-1"
                    : "py-1 border-b border-textHeadlineColor/20"
                }
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
