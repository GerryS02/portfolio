import { Music2, Dumbbell, Trees, Cpu, Briefcase } from "lucide-react";
import { SectionLabel } from "./About";

const interests = [
  { icon: Music2, label: "Music Production" },
  { icon: Dumbbell, label: "Fitness & Training" },
  { icon: Trees, label: "Nature & Outdoors" },
  { icon: Cpu, label: "Software Innovation" },
];

export function ExperienceInterests() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <SectionLabel>05 — Experience</SectionLabel>
          <div className="mt-6 rounded-3xl glass p-8 md:p-10 shadow-soft">
            <Briefcase className="h-6 w-6 text-muted-foreground" />
            <h3 className="mt-6 font-display text-3xl tracking-tight">
              Currently seeking internship and software engineering opportunities.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              While early in my career, I bring strong academic foundations, hands-on project
              shipping, and a deep curiosity for how systems work end-to-end.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>· Strong academic record (GPA 3.89)</li>
              <li>· Technical leadership in team projects</li>
              <li>· Active hackathon participant</li>
              <li>· Continuous learner across the stack</li>
            </ul>
          </div>
        </div>

        <div>
          <SectionLabel>06 — Off-keyboard</SectionLabel>
          <h3 className="mt-6 font-display text-3xl tracking-tight max-w-md">
            What keeps the mind and body sharp.
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {interests.map((i) => (
              <div
                key={i.label}
                className="rounded-2xl glass p-6 shadow-soft hover:-translate-y-1 transition-transform"
              >
                <i.icon className="h-6 w-6 text-foreground" />
                <div className="mt-6 text-sm font-medium">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
