"use client";

import { testimonialData } from "@/app/lib/testimonialData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import clsx from "clsx";
import useReveal from "@/app/hooks/useReveal";

export default function Testimonial() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="testimonial-title"
      className={clsx(
        "px-6 py-[52px] bg-background min-sm:py-[92px] opacity-0 translate-y-16",
        {
          "revealEffect ": visible,
        }
      )}
    >
      <h2 id="testimonial-title" className="sr-only">
        Depoimentos de clientes
      </h2>
      <div className="relative max-w-[1280px] m-auto">
        {/* Slider Wrapper */}
        <Swiper
          id="swiper-wrapper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          aria-live="polite"
        >
          {testimonialData.map(({ id, profile, comment, name }) => (
            <SwiperSlide
              key={id}
              className="!flex flex-col items-center gap-3 px-7 min-sm:gap-4"
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
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                  src={"/images/quotation-icon.svg"}
                  width={32}
                  height={23}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="fontBody max-w-[65ch]">{comment}</p>
                <h3 className="fontHeadline capitalize mt-3 mb-1 min-sm:mt-4 min-sm:mb-2">
                  {name}
                </h3>
                <p className="fontDetail">Cliente</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Buttons Wrapper */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between min-lg:grid min-lg:grid-cols-12 min-lg:gap-5 z-[999]">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Slide anterior"
              aria-controls="swiper-wrapper"
              className="col-start-2 col-end-3 py-4 justify-self-start cursor-pointer hover:scale-95 focus-visible:scale-95 transition-transform duration-300"
            >
              <Image
                aria-hidden="true"
                className="block dark:hidden"
                src={"/images/chevron-left-icon-black.svg"}
                width={20}
                height={15}
                alt=""
              />
              <Image
                aria-hidden="true"
                className="hidden dark:block"
                src={"/images/chevron-left-icon-white.svg"}
                width={20}
                height={15}
                alt=""
              />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo slide"
              aria-controls="swiper-wrapper"
              className="col-start-11 col-end-12 justify-self-end py-4 cursor-pointer hover:scale-95 focus-visible:scale-95 transition-transform duration-300"
            >
              <Image
                aria-hidden="true"
                className="block dark:hidden"
                src={"/images/chevron-right-icon-black.svg"}
                width={20}
                height={15}
                alt=""
              />
              <Image
                aria-hidden="true"
                className="hidden dark:block"
                src={"/images/chevron-right-icon-white.svg"}
                width={20}
                height={15}
                alt=""
              />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
