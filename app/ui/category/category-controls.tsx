import clsx from "clsx";
import Link from "next/link";

interface CategoryControlsProps {
  next: {
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
  prev: {
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

export default function CategoryControls({
  next,
  prev,
}: CategoryControlsProps) {
  return (
    <nav aria-label="Navegação entre categorias" className="px-6">
      <div className="max-w-[1280px] m-auto">
        <hr className="border-black/15 dark:border-white/15" />
        <div className="flex justify-between fontHeadline py-2 min-sm:py-4">
          <Link
            tabIndex={prev ? 0 : -1}
            aria-disabled={!prev}
            className={clsx({ "opacity-15 pointer-events-none": !prev })}
            href={prev ? `/categorias/${prev.label}` : "#"}
          >
            Anterior
          </Link>
          <Link
            tabIndex={next ? 0 : -1}
            aria-disabled={!next}
            className={clsx({ "opacity-15 pointer-events-none": !next })}
            href={next ? `/categorias/${next.label}` : "#"}
          >
            Próximo
          </Link>
        </div>
      </div>
    </nav>
  );
}
