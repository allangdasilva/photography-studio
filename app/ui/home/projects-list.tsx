import useFancyboxDefault from "@/app/hooks/useFancyboxDefault";
import Image from "next/image";
import React from "react";
import HoverGallery from "@/app/ui/helper/hover-gallery";

interface ProjectListProps extends React.HTMLAttributes<HTMLUListElement> {
  project: {
    projectOrder: number;
    bgUrl: string;
    gallery: {
      id: number;
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
}

export default function ProjectList({
  project: { projectOrder, bgUrl, gallery },
}: ProjectListProps) {
  const [fancyboxRef] = useFancyboxDefault();
  return (
    <ul
      ref={fancyboxRef}
      style={{
        backgroundImage: `url('${bgUrl}')`,
      }}
      className="relative w-full aspect-square bg-[length:100%] bg-center grid grid-cols-6 after:block after:absolute after:inset-0 after:backdrop-blur-md after:bg-black/30 has-[button:hover]:bg-[length:105%] has-[button:focus-visible]:bg-[length:105%] transition-all duration-700"
    >
      {gallery.map(({ id, src, alt, width, height }, index) => (
        <React.Fragment key={id}>
          {index === 0 && (
            <li className="col-start-3 col-end-5 self-center z-50">
              <button
                type="button"
                aria-haspopup="dialog"
                data-fancybox={`gallery-project-${projectOrder}`}
                data-src={src}
                className="relative aspect-[11/16] overflow-hidden cursor-pointer group"
              >
                <Image
                  className="w-full h-full object-cover"
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <HoverGallery />
              </button>
            </li>
          )}
          {index !== 0 && (
            <li
              data-fancybox={`gallery-project-${projectOrder}`}
              data-src={src}
              hidden
            >
              <Image src={src} alt={alt} width={width} height={height} />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
