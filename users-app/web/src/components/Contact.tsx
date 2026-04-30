import { useState } from "react";
import type { FormEvent } from "react";
import { useRevealAll } from "../hooks/useReveal";
import { Send, Mail, Github, MessageCircle, CheckCircle, MapPin } from "lucide-react";

const socials = [
  {
    name: "Email",
    value: "mansurovbexruz21@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mansurovbexruz21@gmail.com",
    icon: <Mail size={20} />,
    color: "hover:text-red-400",
    bg: "bg-red-400/10 border-red-400/20"
  },
  {
    name: "Telegram",
    value: "@mansurov_bexruz",
    href: "https://t.me/mansurovvs_15",
    icon: <MessageCircle size={20} />,
    color: "hover:text-sky-400",
    bg: "bg-sky-400/10 border-sky-400/20"
  },
  {
    name: "GitHub",
    value: "github.com/MansurovBexruz",
    href: "https://github.com/MansurovBexruz",
    icon: <Github size={20} />,
    color: "hover:text-white",
    bg: "bg-slate-400/10 border-slate-400/20"
  }
];

export default function Contact() {
  const containerRef = useRevealAll();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent" />

      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="section-badge rounded-full px-4 py-1.5 font-mono text-xs">05. contact</span>
          <h2 className="mt-6 mb-4 text-4xl font-black text-white lg:text-5xl">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          <p className="mx-auto max-w-lg text-slate-400">
            Loyihangiz bormi yoki shunchaki salomlashmoqchimisiz? Mening elektron pochta qutim doim ochiq.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="reveal-left space-y-6 lg:col-span-2">
            <div className="glass-card rounded-2xl border border-white/5 p-6">
              <h3 className="mb-6 font-bold text-white">Get in Touch</h3>

              <div className="space-y-4">
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 rounded-xl border p-3.5 ${s.bg} text-slate-400 ${s.color} group transition-all duration-200 hover:scale-[1.02]`}
                  >
                    <div className="flex-shrink-0">{s.icon}</div>
                    <div>
                      <div className="mb-0.5 text-xs font-semibold text-white">{s.name}</div>
                      <div className="font-mono text-xs">{s.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="glass flex items-center gap-4 rounded-xl border border-white/5 p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Nurafshon, Toshkent</div>
                <div className="text-xs text-slate-500">Dunyo bo'ylab masofaviy qurilmalar uchun ochiq</div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-xl border border-green-400/20 bg-green-400/5 p-5">
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-sm font-semibold text-green-400">Mavjud</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Frilanser loyihalar va to'liq vaqtli kichik dasturchi lavozimlari uchun ochiq. Javob berish vaqti: 24
                soatdan kam.{" "}
              </p>
            </div>
          </div>

          {/* Right – form */}
          <div className="reveal-right lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card space-y-5 rounded-2xl border border-white/5 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  className="form-input w-full rounded-xl px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="form-input w-full resize-none rounded-xl px-4 py-3 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className={`relative z-10 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition-all duration-300 ${
                  sent ? "cursor-default bg-green-500/80" : "btn-primary"
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
