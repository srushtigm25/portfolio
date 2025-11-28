// app/page.tsx
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/Experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import About from "@/components/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
