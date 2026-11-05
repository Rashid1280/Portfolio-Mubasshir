import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <ProjectGrid />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
