import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-6 text-center min-sm:py-12 bg-background">
      <div className="max-w-[1280px] m-auto">
        <h2 className="fontDisplay mb-1 min-sm:mb-2">
          404 Página não encontrada!
        </h2>
        <p className="fontBody mb-2 min-sm:mb-4">
          Não foi possível encontrar a página solicitada.
        </p>
        <Link
          href="/"
          className="fontNav text-textNavMobileColor capitalize relative after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100 after:origin-left after:bg-textNavMobileColor after:transition-transform after:duration-700"
        >
          Voltar
        </Link>
      </div>
    </main>
  );
}
