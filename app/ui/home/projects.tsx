"use client";

import useFancyboxDefault from "@/app/hooks/useFancyboxDefault";
import { firstProject, secondProject } from "@/app/lib/imagesData";
import ProjectList from "./projects-list";

export default function Projects() {
  const [fancyboxRef] = useFancyboxDefault();

  return (
    <section className="p-6 text-center min-sm:py-12 bg-background">
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
