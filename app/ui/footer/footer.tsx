import Image from "next/image";
import SocialsFooter from "./socials-footer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 pt-0 min-sm:pt-6 bg-background">
      <div className="max-w-[1280px] m-auto grid gap-6">
        <hr className="border-black/5 dark:border-white/5" />
        <div className="space-y-3 min-sm:flex min-sm:justify-between min-sm:flex-row-reverse min-sm:space-y-0">
          <SocialsFooter />
          <p className="fontBody text-center opacity-80">
            Allan © 2025. Todos direitos reservados.
          </p>
        </div>
        <Link
          className="hover:scale-95 focus:scale-95 transition-transform duration-400"
          href={"/"}
        >
          <Image
            src={"/images/logo-photography-studio-black.svg"}
            width={43}
            height={48}
            alt="The Photography Studio"
            className="w-full object-contain block dark:hidden"
          />
          <Image
            src={"/images/logo-photography-studio-white.svg"}
            width={43}
            height={48}
            alt="The Photography Studio"
            className="w-full object-contain hidden dark:block"
          />
        </Link>
      </div>
    </footer>
  );
}
