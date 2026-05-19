import { motion } from "framer-motion";
import { Sparkles, Code2, Award, Trophy } from "lucide-react";

const traits = ["Problem-Solver", "Detail-Oriented", "Systems Thinker", "Collaborative", "Agile Experience"];

const cards: Array<{
  icon: typeof Award;
  label: string;
  value: string;
}> = [
  { icon: Award, label: "GPA", value: "3.89" },
  { icon: Code2, label: "Focus", value: "Backend Engineering" },
  { icon: Sparkles, label: "Recognition", value: "Merit Scholar" },
  { icon: Trophy, label: "Academic Excellence", value: "Phi Theta Kappa Honor Society Member" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>01 — About</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
              Building systems that turn ideas into reliable software
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
              I'm Gerry, a Computer Science student at Seattle Pacific University with
              interests in full-stack development and backend systems engineering. I enjoy
              building scalable, efficient software and working on problems that require both
              logical structure and creative thinking.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My primary technical interests lie in backend development, system design, and
              building reliable web applications. I've worked with technologies such as Java,
              Spring Boot, MySQL, and AWS, along with frontend tools like React, HTML, CSS,
              and JavaScript. I enjoy turning complex ideas into clean, functional systems
              that are both practical and user-focused.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Outside of development, I spend time on music, fitness, and exploring nature.
              These interests help me stay balanced and often influence how I approach
              problem-solving with discipline, focus, and creativity.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {traits.map((t) => (
                <span
                  key={t}
                  className="rounded-full glass px-4 py-2 text-xs text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl glass p-5 shadow-soft hover:-translate-y-1 transition-transform"
              >
                <c.icon className="h-5 w-5 text-muted-foreground" />
                <div className="mt-6 font-display text-xl font-medium">{c.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      {children}
    </div>
  );
}
