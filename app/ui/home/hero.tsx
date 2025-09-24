import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center w-full bg-gradient-to-b pt-36 pb-[72px] from-primaryColor to-secondaryColor -z-10">
      <div className="px-6">
        <div className="relative flex justify-center px-14 min-sm:px-28">
          <div className="max-h-[452px] aspect-[11/16]">
            <Image
              className="w-full h-full object-cover"
              src={"/images/moda/moda-1.jpg"}
              width={2401}
              height={3001}
              alt="Mulher estilosa com casaco vermelho, chapéu bege e bolsa sheik, posando sob estrutura de concreto em ambiente urbano."
              priority={true}
            />
          </div>

          <div className="absolute w-full left-1/2 top-1/2 -translate-1/2 -translate-x-1/2 mix-blend-difference">
            <Image
              className="w-full h-full object-cover "
              src={"/images/logo-photography-studio-white.svg"}
              width={546}
              height={52}
              alt="Logo Photography Studio"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
