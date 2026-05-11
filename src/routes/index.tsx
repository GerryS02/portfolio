import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";

import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gerry Singh — Full Stack Developer & Backend Specialist" },
      {
        name: "description",
        content:
          "Gerry Singh — Computer Science student at Seattle Pacific University specializing in backend engineering, scalable systems, and AI-driven applications.",
      },
      { property: "og:title", content: "Gerry Singh — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Backend-focused full stack developer building scalable software, AI apps, and innovative systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      
      <Contact />
      <Footer />
    </main>
  );
}
