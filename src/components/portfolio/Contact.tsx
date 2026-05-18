import { Mail, MapPin, Github, Linkedin, FileDown, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { SectionLabel } from "./About";

const EMAILJS_SERVICE_ID = "service_tptggv3";
const EMAILJS_TEMPLATE_ID = "template_jjut80t";
const EMAILJS_PUBLIC_KEY = "8u2nfM-MHxfJP4fJr";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message, reply_to: email },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>07 — Contact</SectionLabel>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
              Got a vision?
              <br />
              <span className="italic font-light text-muted-foreground">Let's build it</span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Whether it's an internship, a collaboration, or a coffee chat about systems —
              I'd love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              <a
                href="https://github.com/GerryS02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-accent transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gerrysingh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-accent transition"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-accent transition"
              >
                <FileDown className="h-4 w-4" />
                Resume
              </a>
            </div>

            <div className="mt-4 space-y-3">
              <a
                href="mailto:singhg8@spu.edu"
                className="flex items-center justify-between rounded-2xl glass px-5 py-4 hover:bg-accent transition group"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium">singhg8@spu.edu</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <div className="flex items-center gap-4 rounded-2xl glass px-5 py-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-medium">Seattle, WA</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-5 rounded-3xl glass p-8 shadow-soft space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1.5 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1.5 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1.5 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl bg-foreground text-background py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="opacity-70">© 2026 Gerry Singh — All rights reserved.</div>
        <div className="flex gap-6 opacity-70">
          <a href="#about" className="hover:opacity-100">About</a>
          <a href="#projects" className="hover:opacity-100">Projects</a>
          <a href="#contact" className="hover:opacity-100">Contact</a>
        </div>
        
      </div>
    </footer>
  );
}
