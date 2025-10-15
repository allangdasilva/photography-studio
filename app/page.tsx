import Hero from "@/app/ui/home/hero";
import Categories from "@/app/ui/home/categories";
import About from "@/app/ui/home/about";
import Projects from "@/app/ui/home/projects";
import Testimonial from "@/app/ui/home/testimonial";
import ContactContent from "@/app/ui/contact/contact-content";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <About />
        <Projects />
        <Testimonial />
        <ContactContent />
      </main>
    </>
  );
}
