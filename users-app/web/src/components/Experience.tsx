import { useRevealAll } from "../hooks/useReveal";
import { Award, BookOpen, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: <Briefcase size={16} className="text-sky-400" />,
    title: "Freelance Web Developer",
    org: "Self-Employed",
    period: "Jan 2024 – Present",
    color: "border-sky-500/30 bg-sky-500/5",
    dotColor: "bg-sky-400",
    points: [
      "Designed and developed 8+ responsive websites for small businesses",
      "Built custom React dashboards with data visualizations for clients",
      "Improved page load performance by 40% through optimization techniques"
    ]
  },
  {
    type: "work",
    icon: <Briefcase size={16} className="text-indigo-400" />,
    title: "Junior Web Developer (Intern)",
    org: "TechStart Agency",
    period: "Jun 2023 – Dec 2023",
    color: "border-indigo-500/30 bg-indigo-500/5",
    dotColor: "bg-indigo-400",
    points: [
      "Collaborated on 3 client projects using React and TypeScript",
      "Implemented pixel-perfect UI from Figma designs",
      "Participated in daily standups and code reviews in an Agile team"
    ]
  },
  {
    type: "cert",
    icon: <Award size={16} className="text-amber-400" />,
    title: "Meta Front-End Developer Certificate",
    org: "Coursera / Meta",
    period: "Mar 2023",
    color: "border-amber-500/30 bg-amber-500/5",
    dotColor: "bg-amber-400",
    points: [
      "Completed 9-course professional certificate program",
      "Covered React, JavaScript, UX/UI design principles",
      "Built a capstone portfolio project as final assessment"
    ]
  },
  {
    type: "cert",
    icon: <Award size={16} className="text-green-400" />,
    title: "The Odin Project – Full Stack",
    org: "The Odin Project",
    period: "Sep 2022 – Feb 2023",
    color: "border-green-500/30 bg-green-500/5",
    dotColor: "bg-green-400",
    points: [
      "Completed full-stack curriculum covering HTML, CSS, JavaScript, React, Node.js",
      "Built 15+ projects including an Express REST API and React SPA",
      "Strong focus on problem-solving and computer science fundamentals"
    ]
  },
  {
    type: "education",
    icon: <BookOpen size={16} className="text-rose-400" />,
    title: "CS50: Introduction to Computer Science",
    org: "Harvard / edX",
    period: "Jun 2022",
    color: "border-rose-500/30 bg-rose-500/5",
    dotColor: "bg-rose-400",
    points: [
      "Completed Harvard's prestigious intro to CS course with distinction",
      "Topics: algorithms, data structures, C, Python, SQL, web development",
      "Final project: Full-stack task management application"
    ]
  }
];

const certBadges = [
  { name: "Meta Front-End Developer", issuer: "Coursera", color: "from-sky-500 to-blue-600" },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp", color: "from-green-500 to-emerald-600" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", color: "from-orange-500 to-amber-600" },
  { name: "CS50x", issuer: "Harvard / edX", color: "from-red-500 to-rose-600" }
];

export default function Experience() {
  const containerRef = useRevealAll();

  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent" />

      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="section-badge rounded-full px-4 py-1.5 font-mono text-xs">04. experience</span>
          <h2 className="mt-6 mb-4 text-4xl font-black text-white lg:text-5xl">
            Experience & <span className="gradient-text">Certificates</span>
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          <p className="mx-auto max-w-lg text-slate-400">
            Mening professional yo'lim va ko'nikmalarimni shakllantirgan o'rganish bosqichlari.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="relative space-y-6 pl-8">
              {/* Vertical line */}
              <div className="absolute top-3 bottom-3 left-3 w-px bg-gradient-to-b from-sky-400 via-indigo-400 to-transparent" />

              {experiences.map((exp, i) => (
                <div key={exp.title} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-5 -left-5 h-3.5 w-3.5 rounded-full ${exp.dotColor} shadow-lg ring-2 ring-slate-950`}
                  />

                  {/* Card */}
                  <div className={`glass-card rounded-2xl border p-5 ${exp.color}`}>
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">{exp.icon}</div>
                        <div>
                          <h3 className="text-sm leading-tight font-semibold text-white">{exp.title}</h3>
                          <div className="mt-0.5 text-xs text-slate-400">{exp.org}</div>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 items-center gap-1.5 font-mono text-xs whitespace-nowrap text-slate-500">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.points.map(pt => (
                        <li key={pt} className="flex gap-2 text-xs text-slate-400">
                          <span className="mt-0.5 flex-shrink-0 text-sky-400">▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – badges + stats */}
          <div className="reveal-right space-y-6 lg:col-span-2">
            <div className="glass-card rounded-2xl border border-white/5 p-6">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-bold text-white">
                <Award size={16} className="text-amber-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certBadges.map(badge => (
                  <div
                    key={badge.name}
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/3 p-3 transition-colors hover:border-sky-500/20"
                  >
                    <div
                      className={`h-8 w-8 rounded-lg bg-gradient-to-br ${badge.color} flex flex-shrink-0 items-center justify-center shadow-lg`}
                    >
                      <Award size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white transition-colors group-hover:text-sky-400">
                        {badge.name}
                      </div>
                      <div className="text-xs text-slate-500">{badge.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "15+", label: "Projects Built", color: "text-sky-400" },
                { value: "4", label: "Certificates", color: "text-amber-400" },
                { value: "8+", label: "Clients Served", color: "text-green-400" },
                { value: "2+", label: "Years Coding", color: "text-indigo-400" }
              ].map(({ value, label, color }) => (
                <div key={label} className="glass-card rounded-xl border border-white/5 p-4 text-center">
                  <div className={`text-2xl font-black ${color} mb-1`}>{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="#"
              className="btn-primary relative z-10 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white"
            >
              <BookOpen size={15} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
