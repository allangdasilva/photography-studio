"use client";

import useReveal from "@/app/hooks/useReveal";
import Form from "@/app/ui/form/form";
import StudioInfos from "@/app/ui/helper/studio-infos";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function ContactContent() {
  const pathname = usePathname();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={clsx("bg-background opacity-0 translate-y-16", {
        "revealEffect ": visible,
      })}
    >
      {pathname !== "/" && (
        <div
          style={{ backgroundImage: "url('/images/projetos/projeto-1-5.jpg')" }}
          className="w-full h-40 bg-center bg-cover min-sm:h-60"
        ></div>
      )}
      <div className="p-6 pb-20 min-sm:py-12 min-sm:pb-24 ">
        <div className="max-w-[1280px] m-auto">
          <h2 className="fontHeadline">Contate-nos</h2>
          <div className="min-lg:grid min-lg:grid-cols-2">
            <div>
              <div className="mt-3 space-y-1 min-sm:space-y-2 min-sm:mt-6">
                <h3 className="fontDisplay uppercase">
                  <span className="fontDisplayItalic">Vamos</span>
                  <br />
                  Conversar
                </h3>
                <p className="fontBody">
                  Alguma dúvida? Entre em contato preenchendo nosso formulário.
                </p>
              </div>

              <StudioInfos className="mt-8 min-sm:mt-15" />
            </div>

            <Form className="w-full mt-12 grid gap-y-5 fontBody min-sm:grid-cols-2 min-sm:gap-x-5 min-lg:mt-6 min-lg:gap-y-16 min-lg:self-start" />
          </div>
        </div>
      </div>
    </section>
  );
}
