import { projectsGallery } from "@/app/lib/imagesData";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="p-6 text-center min-sm:p-12 bg-background">
      <h2 className="fontHeadline">Projetos</h2>
      <div className="max-w-[1280px] m-auto">
        <h3 className="fontDisplay uppercase pt-3 pb-6 min-sm:pt-6 min-sm:pb-12">
          <span className="fontDisplayItalic">Cada</span> Projeto é um
          <br className="hidden min-md:block" /> diálogo{" "}
          <span className="fontDisplayItalic">único</span>
        </h3>
        <div className="grid grid-cols-1 gap-5 min-md:grid-cols-2">
          {projectsGallery.map(({ id, thumb, alt, width, height, bg }) => (
            <div key={id} className="grid grid-cols-6 group cursor-pointer">
              <div
                style={{
                  backgroundImage: `url('${bg.url}')`,
                }}
                className="w-full aspect-square bg-center bg-cover row-start-1 col-span-full grayscale-100 group-hover:grayscale-100 transition-normal duration-700 min-md:grayscale-0"
              ></div>
              <div className="row-start-1 col-start-3 col-end-5 self-center aspect-[11/16] overflow-hidden z-10">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={thumb}
                  width={width}
                  height={height}
                  alt={alt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
