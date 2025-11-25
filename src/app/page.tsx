// app/page.tsx
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
