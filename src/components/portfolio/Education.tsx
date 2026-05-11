import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "./About";

const items = [
  {
    school: "Seattle Pacific University",
    degree: "B.S. in Computer Science",
    period: "Expected June 2026",
    gpa: "3.89",
    highlights: [
      "Merit Scholarship Recipient",
      "Member of Phi Theta Kappa Honor Society",
      "Ranked #10 in College-Level Hackathon at SeattleU",
    ],
  },
  {
    school: "Edmonds College",
    degree: "A.S. in Computer Science",
    period: "Sep 2022 — Jun 2024",
    gpa: "3.91",
    highlights: [
      "Merit Scholarship Recipient",
      "Honor Roll for all quarters",
      "Ranked #3 in the All American National Math Competition (Fall 2023)",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>02 — Education</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight max-w-2xl">
          A foundation built on curiosity and rigor.
        </h2>

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute left-2.5 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-foreground ring-4 ring-surface`}
                  />
                  <div className="rounded-2xl glass p-6 shadow-soft">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      {item.period}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-medium">{item.school}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.degree}</p>
                    <div className="mt-3 inline-flex rounded-full bg-foreground text-background px-3 py-1 text-xs">
                      GPA {item.gpa}
                    </div>
                    <ul
                      className={`mt-5 space-y-2 text-sm text-muted-foreground ${
                        i % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {item.highlights.map((h) => (
                        <li key={h}>· {h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
