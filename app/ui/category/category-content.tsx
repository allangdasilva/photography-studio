import { categoriesGallery } from "@/app/lib/imagesData";
import Image from "next/image";

interface CategoryContentProps {
  data: {
    id: number;
    label: string;
    thumbnail: string;
    description: string;
    details: {
      client: string;
      address: string;
      local: string;
      category: string;
      photographer: string;
      shutterSpeed: string;
      camera: string;
      lens: string;
    };
  };
}

export default function CategoryContent({ data }: CategoryContentProps) {
  const galleryData = categoriesGallery.filter(
    (c) => c.category === data.label
  );

  return (
    <section className="p-6 min-sm:py-12 bg-background">
      <div className="max-w-[1280px] m-auto min-lg:grid min-lg:grid-cols-2 min-lg:gap-5">
        <div className="min-lg:col-start-2 min-lg:sticky min-lg:top-5 min-lg:self-start">
          <div className="space-y-2 mb-6 min-lg:space-y-4 min-lg:mb-12">
            <h2 className="fontDisplay uppercase">{data.label}</h2>
            <p className="fontBody max-w-[65ch]">{data.description}</p>
          </div>

          <hr className="border-black/15 dark:border-white/15" />

          <ul className="grid gap-y-7 gap-x-5 fontBody my-6 min-lg:mt-12 min-lg:mb-0 min-sm:grid-cols-2">
            <li>
              Cliente: <span className="opacity-75">{data.details.client}</span>
            </li>
            <li>
              Endereço:{" "}
              <span className="opacity-75">{data.details.address}</span>
            </li>
            <li>
              Local: <span className="opacity-75">{data.details.local}</span>
            </li>
            <li>
              Categoria:{" "}
              <span className="opacity-75">{data.details.category}</span>
            </li>
            <li>
              Fotógrafo:{" "}
              <span className="opacity-75">{data.details.photographer}</span>
            </li>
            <li>
              Shutter Speed:{" "}
              <span className="opacity-75">{data.details.shutterSpeed}</span>
            </li>
            <li>
              Câmera: <span className="opacity-75">{data.details.camera}</span>
            </li>
            <li>
              Lente: <span className="opacity-75">{data.details.lens}</span>
            </li>
          </ul>
        </div>

        <div className="min-lg:col-start-1 min-lg:row-start-1">
          <ul className="grid gap-5">
            {galleryData.map(({ id, src, width, height, alt }) => (
              <li key={id}>
                <button
                  type="button"
                  className="block overflow-hidden cursor-pointer group"
                >
                  <Image
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-700"
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
