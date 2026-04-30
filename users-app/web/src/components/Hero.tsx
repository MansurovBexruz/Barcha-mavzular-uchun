import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Send } from "lucide-react";

const titles = ["Frontend Developer", "Full Stack Developer", "React Enthusiast", "UI/UX Craftsman"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex(i => (i + 1) % titles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section id="home" className="bg-grid relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-950/20 via-transparent to-transparent" />

      {/* Floating shapes */}
      <div
        className="float-animation absolute top-1/4 left-10 h-2 w-2 rounded-full bg-sky-400 opacity-60"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="float-animation absolute top-1/3 right-16 h-1.5 w-1.5 rounded-full bg-indigo-400 opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="float-animation absolute bottom-1/3 left-1/4 h-1 w-1 rounded-full bg-sky-300 opacity-50"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="float-animation absolute top-2/3 right-1/3 h-2 w-2 rounded-full bg-indigo-300 opacity-30"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-24 lg:flex-row">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          

          <h1 className="mb-4 text-5xl leading-tight font-black tracking-tight text-white lg:text-7xl">
            Salom men<span className="gradient-text mt-1 block">Mansurov Bexruz</span>
          </h1>

          <div className="mb-6 flex h-10 items-center justify-center gap-2 text-2xl font-semibold text-slate-300 lg:justify-start lg:text-3xl">
            <span className="font-mono text-sky-400">&lt;</span>
            <span>{displayed}</span>
            <span className="cursor font-bold text-sky-400">|</span>
            <span className="font-mono text-sky-400">/&gt;</span>
          </div>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0">
            Men <span className="font-medium text-sky-400">tezkor, chiroyli va qulay </span> veb-tajribalarni yarataman.
            Foydalanuvchilarni tabassumga soladigan toza kod va piksellarga mos dizaynlarga ishtiyoqmandman.
          </p>

          {/* CTA buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="btn-primary relative z-10 flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-white"
            >
              <Send size={16} />
              Hire Me
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold">
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-5 lg:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-slate-500 hover:text-sky-400"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-slate-500 hover:text-sky-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="social-icon text-slate-500 hover:text-sky-400"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex flex-shrink-0 flex-col items-center gap-6">
          <div className="float-animation relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 opacity-20 blur-2xl" />
            {/* Rotating border */}
            <div className="pulse-ring relative h-64 w-64 lg:h-80 lg:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-sky-400 p-0.5">
                <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
                  <img
                    src="/public/image.png"
                    alt="Bexruz Mansurov - Developer"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            {[
              { value: "15+", label: "Projects" },
              { value: "2+", label: "Years Exp." },
              { value: "10+", label: "Clients" }
            ].map(({ value, label }) => (
              <div key={label} className="glass rounded-xl px-4 py-3 text-center">
                <div className="gradient-text text-xl font-black">{value}</div>
                <div className="mt-0.5 text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-sky-400"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
      </a>
    </section>
  );
}
