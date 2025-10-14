"use client";

import useFancyboxDefault from "@/app/hooks/useFancyboxDefault";
import useReveal from "@/app/hooks/useReveal";
import { firstProject, secondProject } from "@/app/lib/imagesData";
import ProjectList from "@/app/ui/home/projects-list";
import clsx from "clsx";

export default function Projects() {
  const [fancyboxRef] = useFancyboxDefault();
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
      <h2 className="fontHeadline">Projetos</h2>
      <div className="max-w-[1280px] m-auto">
        <h3 className="fontDisplay uppercase pt-3 pb-6 min-sm:pt-6 min-sm:pb-12">
          <span className="fontDisplayItalic">Cada</span> Projeto é um
          <br className="hidden min-md:block" /> diálogo{" "}
          <span className="fontDisplayItalic">único</span>
        </h3>
        <ul
          ref={fancyboxRef}
          className="grid grid-cols-1 gap-5 min-md:grid-cols-2"
        >
          <li>
            <ProjectList project={firstProject} />
          </li>
          <li>
            <ProjectList project={secondProject} />
          </li>
        </ul>
      </div>
    </section>
  );
}
