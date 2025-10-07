import { testimonialData } from "@/app/lib/testimonialData";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-title"
      className="px-6 py-[52px] bg-background min-sm:py-[92px]"
    >
      <h2 id="testimonial-title" className="sr-only">
        Depoimentos de clientes
      </h2>
      <div className="relative max-w-[1280px] m-auto">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between min-lg:grid min-lg:grid-cols-12 min-lg:gap-5">
          <button
            aria-label="Slide anterior"
            aria-controls="testimonial"
            className="col-start-2 col-end-3 py-4 justify-self-start cursor-pointer hover:scale-90 focus-visible:scale-90 transition-transform duration-300"
          >
            <Image
              aria-hidden="true"
              className="block dark:hidden"
              src={"/images/arrow-left-black-icon.svg"}
              width={20}
              height={15}
              alt=""
            />
            <Image
              aria-hidden="true"
              className="hidden dark:block"
              src={"/images/arrow-left-white-icon.svg"}
              width={20}
              height={15}
              alt=""
            />
          </button>
          <button
            aria-label="Próximo slide"
            aria-controls="testimonial"
            className="col-start-11 col-end-12 justify-self-end py-4 cursor-pointer hover:scale-90 focus-visible:scale-90 transition-transform duration-300"
          >
            <Image
              aria-hidden="true"
              className="block dark:hidden"
              src={"/images/arrow-right-black-icon.svg"}
              width={20}
              height={15}
              alt=""
            />
            <Image
              aria-hidden="true"
              className="hidden dark:block"
              src={"/images/arrow-right-white-icon.svg"}
              width={20}
              height={15}
              alt=""
            />
          </button>
        </div>

        <ul id="testimonial" aria-live="polite">
          {testimonialData.map(({ id, profile, comment, name }) => (
            <li
              key={id}
              className="flex flex-col items-center gap-3 px-7 min-sm:gap-4"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden min-sm:w-28 min-sm:h-28">
                <Image
                  className="w-full h-full object-cover"
                  src={profile.src}
                  width={profile.width}
                  height={profile.heigth}
                  alt={profile.alt}
                />
              </div>
              <div className="max-w-6 min-sm:max-w-8">
                <Image
                  className="w-full h-full object-cover"
                  src={"/images/quotation-icon.svg"}
                  width={32}
                  height={23}
                  alt="Aspas ícone"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="fontBody max-w-[65ch]">{comment}</p>
                <h4 className="fontHeadline capitalize mt-3 mb-1 min-sm:mt-4 min-sm:mb-2">
                  {name}
                </h4>
                <p className="fontDetail">Cliente</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-3 mt-8">
          <span
            aria-label="Ir para depoimento 1"
            className="block w-2.5 h-2.5 bg-primaryColor border border-primaryColor rounded-full"
          ></span>
          <span
            aria-label="Ir para depoimento 2"
            className="block w-2.5 h-2.5 border border-primaryColor rounded-full"
          ></span>
          <span
            aria-label="Ir para depoimento 3"
            className="block w-2.5 h-2.5 border border-primaryColor rounded-full"
          ></span>
        </div>
      </div>
    </section>
  );
}
