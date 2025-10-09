import Hero from "@/app/ui/home/hero";
import Categories from "@/app/ui/home/categories";
import About from "@/app/ui/home/about";
import Projects from "./ui/home/projects";
import Testimonial from "./ui/home/testimonial";
import Contact from "./ui/contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <About />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}
