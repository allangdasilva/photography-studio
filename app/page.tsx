import Header from "@/app/ui/header/header";
import Hero from "@/app/ui/home/hero";
import Services from "@/app/ui/home/services";
import About from "@/app/ui/home/about";
import Projects from "./ui/home/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
      </main>
    </>
  );
}
