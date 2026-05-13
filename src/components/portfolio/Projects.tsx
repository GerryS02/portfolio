import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";
import traymateImg from "@/assets/projects/traymate.png";
import glowlightImg from "@/assets/projects/glowlight.png";
import grateImg from "@/assets/projects/grate.png";
import graphixImg from "@/assets/projects/graphix.jpg";
import mealImg from "@/assets/projects/meal.png";
import tracklistImg from "@/assets/projects/tracklist.png";

const projects = [
  {
    name: "TrayMate",
    tag: "AI · Spring Boot",
    desc: "AI-driven meal ordering app for care facilities with secure multi-user workflows and 4 levels of role-based access control.",
    bullets: [
      "Spring Boot backend with JWT authentication",
      "AWS MySQL database with 10+ interconnected tables",
      "CI/CD via GitHub Actions, Cypress automation",
      "Reduced manual testing overhead by 40%",
    ],
    stack: ["Spring Boot", "JWT", "AWS", "MySQL", "CI/CD", "Cypress"],
    image: traymateImg,
    github: "https://github.com/aloepker/TrayMate",
  },
  {
    name: "Glowlight",
    tag: "Embedded · IoT",
    desc: "Raspberry Pi climate monitoring system using a DHT11 sensor and RGB LED with a dual-mode hardware UI.",
    bullets: [
      "Real-time climate readings with 98% signal accuracy",
      "Managed 10+ hardware states across modes",
      "Python + Raspberry Pi GPIO integration",
      "LCD digital reporting system",
    ],
    stack: ["Python", "Raspberry Pi", "GPIO", "Embedded"],
    image: glowlightImg,
    github: "https://github.com/GerryS02/GlowLight",
  },
  {
    name: "G-rate",
    tag: "Data Viz · R",
    desc: "Global literacy visualization suite — interactive R/Shiny app exploring 500+ years of data across 150+ countries.",
    bullets: [
      "Geospatial choropleth maps",
      "Time-series analytics across 150+ countries",
      "Data continuity for sparse historical sets",
      "Built with Plotly + ggplot2",
    ],
    stack: ["R", "Shiny", "Plotly", "ggplot2"],
    image: grateImg,
    github: "https://github.com/GerryS02/G-rate",
  },
  {
    name: "Graphix",
    tag: "Math Viz · React",
    desc: "Responsive web-based math visualization tool for exploring definite integrals of polynomials (degree ≤ 2) in real time.",
    bullets: [
      "Built with React, Bootstrap, and Plotly.js",
      "Real-time polynomial computation via React Hooks",
      "LaTeX-style math rendering with MathJax",
      "Interactive sliders and dynamic graph visualization",
    ],
    stack: ["React", "Plotly.js", "MathJax", "Bootstrap"],
    image: graphixImg,
    github: "https://github.com/GerryS02/Graphix",
  },
  {
    name: "Meal Cost Estimator",
    tag: "Desktop GUI · Python",
    desc: "Lightweight desktop GUI for calculating total meal costs including tax and tip with live updates as inputs change.",
    bullets: [
      "Python + EGUI desktop application",
      "Automated 18% tip and 7% tax computation",
      "Real-time total estimation",
      "Minimal, user-friendly interface",
    ],
    stack: ["Python", "EGUI", "GUI"],
    image: mealImg,
    github: "https://github.com/GerryS02/Total-Meal-Cost-Calculator",
  },
  {
    name: "Track-List",
    tag: "OOP · Java",
    desc: "Java-based music library system with fast search, persistent storage, and a modular architecture ready for future features.",
    bullets: [
      "Object-Oriented design in Java",
      "HashMap-powered lookup by title, artist, or genre",
      "File-based persistence via Java I/O",
      "Scalable structure for playlists & filters",
    ],
    stack: ["Java", "OOP", "HashMap", "File I/O"],
    image: tracklistImg,
    github: "https://github.com/GerryS02/Track-List",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>04 — Selected Work</SectionLabel>
        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight max-w-2xl">
            Projects that explore systems, data, and craft.
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden glass shadow-soft transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-glass hover:backdrop-blur-2xl hover:bg-surface-elevated/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-4 relative min-h-[220px] flex items-end p-8 overflow-hidden">
                  {/* Background image */}
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105"
                  />
                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/30" />

                  <div className="absolute top-6 left-6 text-xs uppercase tracking-[0.2em] text-foreground/60 z-10">
                    0{i + 1}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="absolute top-6 right-6 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 hover:scale-110 z-10"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <div className="relative z-10">
                    <div className="text-xs text-foreground/70 mb-2">{p.tag}</div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight text-foreground">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 md:p-10">
                  <p className="text-foreground/90 text-lg leading-relaxed">{p.desc}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-foreground/40">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
