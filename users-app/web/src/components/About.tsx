import { useRevealAll } from "../hooks/useReveal";
import { Coffee, Target, Zap, Heart } from "lucide-react";

const highlights = [
  {
    icon: <Zap size={18} className="text-sky-400" />,
    title: "Fast Learner",
    desc: "Constantly expanding skills and staying current with web technologies."
  },
  {
    icon: <Target size={18} className="text-indigo-400" />,
    title: "Goal-Oriented",
    desc: "Focused on delivering high-quality solutions that exceed expectations."
  },
  {
    icon: <Heart size={18} className="text-rose-400" />,
    title: "Passionate",
    desc: "Genuinely love building things that make a difference for people."
  },
  {
    icon: <Coffee size={18} className="text-amber-400" />,
    title: "Detail-Focused",
    desc: "Care deeply about pixel-perfect UI and clean, maintainable code."
  }
];

export default function About() {
  const containerRef = useRevealAll();

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent" />

      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <span className="section-badge rounded-full px-4 py-1.5 font-mono text-xs">01. about</span>
          <h2 className="mt-6 mb-4 text-4xl font-black text-white lg:text-5xl">
            Men <span className="gradient-text">haqimda</span>
          </h2>
          <div className="mx-auto h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="reveal-left">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-sky-500/10 to-indigo-500/10 blur-xl" />
              <div className="glass-card glow-border relative overflow-hidden rounded-2xl p-1">
                <img
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Developer workspace"
                  className="h-80 w-full rounded-xl object-cover"
                />
                {/* Code overlay badge */}
                <div className="glass absolute bottom-4 left-4 rounded-xl border border-sky-500/20 px-4 py-3">
                  <div className="font-mono text-xs text-sky-400">
                    <span className="text-slate-500">const </span>
                    <span className="text-indigo-400">developer</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-green-400">"passionate"</span>
                    <span className="text-slate-500">;</span>
                  </div>
                </div>
              </div>

              {/* Floating accent box */}
              <div className="glass-card absolute -top-6 -right-6 hidden rounded-xl border border-sky-500/20 px-5 py-4 lg:block">
                <div className="gradient-text text-2xl font-black">100%</div>
                <div className="mt-0.5 text-xs text-slate-500">Commitment</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-right space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Raqamli g‘oyalarni haqiqatga aylantirish</h3>
              <p className="mb-4 leading-relaxed text-slate-400">
                Men zamonaviy veb-ilovalar yaratishga katta qiziqishga ega bo‘lgan junior frontend va full stack
                dasturchiman. Dasturlashga bo‘lgan sayohatim oddiy qiziqish bilan boshlangan, ammo tez orada bu mening
                haqiqiy kasbimga aylandi — toza va samarali kod orqali dizaynni jonlantirish hissi bilan hech narsa
                tenglasha olmaydi.
              </p>
              <p className="leading-relaxed text-slate-400">
                Mening maqsadim — kuchli jamoa bilan birga rivojlanish, ilk kundanoq foydali hissa qo‘shish va kelajakda
                veb imkoniyatlari chegaralarini kengaytiradigan loyihalarga yetakchilik qilish. Men jamoaviy muhitda
                ishlashni yaxshi ko‘raman va doimo yangi texnologiyalarni o‘rganishga intilaman.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "Name", value: "Alex Morgan" },
                { label: "Location", value: "New York, USA" },
                { label: "Email", value: "alex@example.com" },
                { label: "Status", value: "Open to Work" }
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2">
                  <span className="text-sm text-slate-500">{label}:</span>
                  <span
                    className={`text-sm font-medium ${value === "Open to Work" ? "text-green-400" : "text-slate-200"}`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary relative z-10 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white"
            >
              Let's Connect
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="reveal glass-card skill-card rounded-xl p-5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">{item.icon}</div>
              <h4 className="mb-1 text-sm font-semibold text-white">{item.title}</h4>
              <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
