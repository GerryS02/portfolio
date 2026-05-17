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
    tag: "Full-Stack Mobile App",
    desc: "A meal ordering system for care facilities that supports meal selection for residents independently, with AI-assisted suggestions and automatic validation against dietary restrictions.",
    bullets: [
      "Built Spring Boot backend with JWT authentication and separate user portals for admin, caregiver, medical staff, and residents",
      "Designed AWS MySQL schema with 10+ relational tables for users, meals, orders, and dietary constraints",
      "Integrated CI/CD pipeline using GitHub Actions with Cypress automated testing",
      "Implemented AI-based meal suggestions based on user history and dietary needs",
    ],
    stack: ["Spring Boot", "Spring Security", "React Native", "AWS RDS (MySQL)", "Gemini API", "CI/CD", "Cypress"],
    image: traymateImg,
    github: "https://github.com/aloepker/TrayMate",
  },
  {
    name: "Glowlight",
    tag: "IoT Device (Raspberry Pi)",
    desc: "A Raspberry Pi-based real-time climate monitoring system that uses sensor data to provide instant visual feedback through an adaptive RGB LED interface.",
    bullets: [
      "Captures real-time sensor data with 98% accuracy using DHT11 temperature and humidity sensor",
      "Built multi-state control system to manage device behavior across different modes",
      "Developed Python-based GPIO integration for hardware control",
      "Displayed live readings using LCD output and RGB LED indicators",
    ],
    stack: ["Python", "Raspberry Pi", "GPIO", "DHT11 Sensor", "Potentiometer"],
    image: glowlightImg,
    github: "https://github.com/GerryS02/GlowLight",
  },
  {
    name: "G-rate",
    tag: "Data Visualization Web App",
    desc: "An interactive data visualization web app that explores global literacy trends from 1475 to 2023, allowing users to analyze how literacy rates have evolved across countries and over time.",
    bullets: [
      "Built interactive dashboards using R Shiny with Plotly-powered world map and time-series visualizations",
      "Designed geospatial choropleth system using sf and rnaturalearth to visualize literacy rates across 150+ countries",
      "Implemented \"most recent available data\" logic to handle sparse historical records and ensure meaningful map rendering",
      "Developed filtering and comparison tools enabling multi-country literacy trend analysis over time",
    ],
    stack: ["R", "Shiny", "Plotly", "ggplot2", "sf", "rnaturalearth"],
    image: grateImg,
    github: "https://github.com/GerryS02/G-rate",
  },
  {
    name: "Graphix",
    tag: "React Web App",
    desc: "A web application for visualizing mathematical functions and integrals in real time.",
    bullets: [
      "Built interactive frontend using React and Bootstrap",
      "Implemented real-time polynomial calculations using React Hooks",
      "Integrated MathJax for LaTeX-style mathematical rendering",
      "Created dynamic graph visualizations with Plotly.js and slider controls",
    ],
    stack: ["React", "Plotly", "MathJax", "Bootstrap"],
    image: graphixImg,
    github: "https://github.com/GerryS02/Graphix",
  },
  {
    name: "Meal Cost Estimator",
    tag: "Desktop GUI Application",
    desc: "Lightweight desktop GUI for calculating total meal costs including tax and tip with live updates as inputs change.",
    bullets: [
      "Built GUI application using Python for interactive input handling",
      "Implemented live calculation updates for subtotal, tax, and tip",
      "Automated percentage-based cost breakdown logic",
      "Minimal, user-friendly interface",
    ],
    stack: ["Python", "GUI Development"],
    image: mealImg,
    github: "https://github.com/GerryS02/Total-Meal-Cost-Calculator",
  },
  {
    name: "Track-List",
    tag: "CLI Application",
    desc: "Java-based music library system with fast search, persistent storage, and a modular architecture ready for future features.",
    bullets: [
      "Designed object-oriented architecture for scalable music management system",
      "Implemented HashMap-based search by title, artist, and genre",
      "Built file-based persistence using Java I/O for data storage",
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
        <SectionLabel>04 — Projects</SectionLabel>
        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight max-w-2xl">
            A collection of things I've built
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
