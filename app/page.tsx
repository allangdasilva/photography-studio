import Header from "@/app/ui/header/header";
import Hero from "@/app/ui/home/hero";
import Services from "@/app/ui/home/services";
import About from "@/app/ui/home/about";
import Projects from "./ui/home/projects";
import Testimonial from "./ui/home/testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonial />
      </main>
    </>
  );
}
