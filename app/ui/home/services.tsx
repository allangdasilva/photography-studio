import { servicesData } from "@/app/lib/servicesData";
import Link from "next/link";

// ClipPath Categories bg
const clipPath =
  "[clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)] group-hover:[clip-path:polygon(100%_0,_100%_0,_100%_100%,_100%_100%)] group-focus:[clip-path:polygon(100%_0,_100%_0,_100%_100%,_100%_100%)]";

export default function Services() {
  return (
    <section className="p-6 text-center min-sm:p-12 bg-background">
      <h2 className="fontHeadline">Serviços</h2>
      <div className="max-w-[1280px] m-auto">
        <h3 className="fontDisplay uppercase pt-3 pb-6 min-sm:pt-6 min-sm:pb-12">
          Somos Fotógrafos
          <br />
          <span className="fontDisplayItalic">Apaixonados</span>
        </h3>
        <div className="grid gap-5 min-sm:grid-cols-2 min-lg:grid-cols-4">
          {servicesData.map(({ label, thumbnail, id }) => (
            <Link
              key={id}
              href={`/servicos/${label}`}
              style={{ backgroundImage: `url('${thumbnail}')` }}
              className={`relative bg-cover bg-center w-full aspect-[11/16] group`}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-full h-full bg-black/50 z-10 group-hover:bg-black/0 group-focus:bg-black/0 transition-colors duration-700"
              ></div>
              <div
                aria-hidden="true"
                style={{
                  backgroundImage: `url('${thumbnail}')`,
                }}
                className={`absolute top-0 right-0 w-1/3 h-full bg-cover bg-center 
                  ${clipPath} transition-[clip-path] duration-700`}
              ></div>
              <div className="absolute top-0 right-0 w-1/3 h-full">
                <p
                  style={{ color: "white" }}
                  className="absolute bottom-6 -translate-x-1/2 fontHeadline capitalize z-20"
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
