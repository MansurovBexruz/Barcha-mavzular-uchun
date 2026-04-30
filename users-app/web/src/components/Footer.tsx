import { Mail, MessageCircle, Code2, ArrowUp, Github, Linkedin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const socials = [
  { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <MessageCircle size={18} />, href: "https://t.me", label: "Telegram" },
  { icon: <Mail size={18} />, href: "mailto:alex@example.com", label: "Email" }
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/50">
      {/* Top gradient */}
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">
              Bexruz<span className="gradient-text">Dev</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="text-sm text-slate-500 transition-colors hover:text-sky-400">
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon text-slate-500 hover:text-sky-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Mansurov Bexruz.<span className="text-sky-400">React</span> &{" "}
            <span className="text-sky-400">TypeScript</span> yordamida yaratilgan.
          </p>

          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 font-mono text-xs text-slate-500 transition-colors hover:text-sky-400"
            aria-label="Back to top"
          >
            Yuqoriga qaytish
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
