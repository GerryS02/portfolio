import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

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
    accent: "from-zinc-200 to-zinc-100",
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
    accent: "from-stone-200 to-stone-100",
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
    accent: "from-neutral-200 to-neutral-100",
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
              className="group relative rounded-3xl overflow-hidden glass shadow-soft hover:shadow-glass transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div
                  className={`lg:col-span-4 bg-gradient-to-br ${p.accent} relative min-h-[220px] flex items-end p-8`}
                >
                  <div className="absolute top-6 left-6 text-xs uppercase tracking-[0.2em] text-foreground/60">
                    0{i + 1}
                  </div>
                  <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60 mb-2">{p.tag}</div>
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
