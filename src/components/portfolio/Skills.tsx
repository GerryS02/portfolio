import { motion } from "framer-motion";
import { Code, Layers, Wrench } from "lucide-react";
import { SectionLabel } from "./About";

const groups = [
  {
    icon: Code,
    title: "Languages",
    items: ["Java", "C++", "SQL", "JavaScript", "HTML", "CSS", "R"],
  },
  {
    icon: Layers,
    title: "Libraries & Frameworks",
    items: ["Spring Boot", "MySQL", "ReactJS", "Bootstrap"],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    items: ["AWS", "Azure", "Docker", "Git", "CI/CD", "Postman", "Jira", "Cypress", "Shiny", "Plotly"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>03 — Skills</SectionLabel>
        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight max-w-xl">
            What I work with
          </h2>
          <p className="text-muted-foreground max-w-sm">
            Technologies I use in my projects
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl glass p-7 shadow-soft hover:shadow-glass transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-foreground text-background flex items-center justify-center">
                  <g.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-lg font-medium">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary text-secondary-foreground px-3 py-1.5 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
