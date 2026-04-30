import { useRevealAll } from "../hooks/useReveal";

const skills = [
  { name: "HTML", icon: "🌐", level: 95, color: "from-orange-400 to-red-400", desc: "Semantic & Accessible" },
  { name: "CSS", icon: "🎨", level: 90, color: "from-sky-400 to-blue-500", desc: "Animations & Layouts" },
  { name: "Tailwind CSS", icon: "💨", level: 92, color: "from-cyan-400 to-sky-500", desc: "Utility-First Styling" },
  { name: "JavaScript", icon: "⚡", level: 85, color: "from-yellow-400 to-amber-400", desc: "ES6+ & DOM APIs" },
  { name: "TypeScript", icon: "🔷", level: 78, color: "from-blue-400 to-indigo-500", desc: "Type-Safe Code" },
  { name: "React", icon: "⚛️", level: 88, color: "from-sky-400 to-cyan-400", desc: "Hooks & Context" },
  { name: "Git / GitHub", icon: "🔗", level: 82, color: "from-slate-400 to-slate-500", desc: "Version Control" },
  { name: "Node.js", icon: "🟢", level: 70, color: "from-green-400 to-emerald-500", desc: "Backend APIs" }
];

const tools = ["VS Code", "Vite", "Figma", "Postman", "Supabase", "Vercel", "npm", "Linux"];

export default function Skills() {
  const containerRef = useRevealAll();

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent" />

      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="section-badge rounded-full px-4 py-1.5 font-mono text-xs">02. skills</span>
          <h2 className="mt-6 mb-4 text-4xl font-black text-white lg:text-5xl">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          <p className="mx-auto max-w-lg text-slate-400">
            Zamonaviy, samarali veb-ilovalarni yaratish uchun men ishlaydigan texnologiyalar.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal glass-card skill-card group rounded-2xl p-5"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Icon and name */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-lg shadow-lg`}
                >
                  {skill.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{skill.name}</div>
                  <div className="text-xs text-slate-500">{skill.desc}</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">proficiency</span>
                  <span className="font-mono text-xs font-bold text-sky-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} group-hover:shadow-glow transition-all duration-700`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Additional */}
        <div className="reveal glass rounded-2xl border border-white/5 p-8">
          <h3 className="mb-6 text-center font-mono text-sm font-bold tracking-widest text-white uppercase">
            Tools & Environment
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map(tool => (
              <span
                key={tool}
                className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-sky-400/40 hover:bg-sky-400/5 hover:text-sky-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
