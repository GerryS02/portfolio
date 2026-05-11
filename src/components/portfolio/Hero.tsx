import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/gerry-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 overflow-hidden">
      {/* Contemporary grid + ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-20 -left-24 h-96 w-96 rounded-full bg-accent blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-8"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Available · Full-time / Internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.92] font-normal tracking-tight text-balance"
            >
              Gerry
              <br />
              <span className="italic text-muted-foreground">Singh.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Full Stack Developer · Backend Specialist · CS Student at Seattle Pacific
              University. I build scalable software systems, AI-driven applications, and
              thoughtful technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-foreground hover:bg-accent transition"
              >
                Contact Me
              </a>
            </motion.div>

            <div className="mt-16 flex items-center gap-10">
              <Stat number="3.89" label="Cumulative GPA" />
              <Stat number="3+" label="Featured Projects" />
              <Stat number="#10" label="SeattleU Hackathon" />
            </div>
          </div>

          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent via-secondary to-muted blur-xl opacity-70" />
              <div className="relative rounded-[2rem] overflow-hidden glass shadow-glass">
                <img
                  src={portrait}
                  alt="Portrait of Gerry Singh"
                  width={1024}
                  height={1280}
                  className="w-full h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-medium text-foreground">Seattle, WA</div>
                    <div className="text-muted-foreground">B.S. Computer Science · '26</div>
                  </div>
                  <span className="rounded-full bg-foreground text-background px-2 py-1 text-[10px] uppercase tracking-wider">
                    Backend
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <ArrowDown className="h-3 w-3 animate-bounce" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-3xl font-medium">{number}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
