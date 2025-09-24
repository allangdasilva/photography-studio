import Header from "@/app/ui/header/header";
import Hero from "@/app/ui/home/hero";
import Services from "@/app/ui/home/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
