import { Hero } from "../components/Hero";
import { ProjectGrid } from "../components/ProjectGrid";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
