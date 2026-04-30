import { useRevealAll } from "../hooks/useReveal";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  //   {
  //     title: "ShopFlow E-Commerce",
  //     description:
  //       "A full-featured online store with cart management, Stripe payments, and real-time inventory updates. Built with React and a Supabase backend.",
  //     image: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["React", "TypeScript", "Supabase", "Tailwind"],
  //     github: "#",
  //     demo: "#",
  //     featured: true
  //   },
  //   {
  //     title: "TaskMaster Pro",
  //     description:
  //       "A productivity app with drag-and-drop boards, real-time collaboration, and analytics dashboard. Inspired by Trello, built from scratch.",
  //     image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  //     github: "#",
  //     demo: "#",
  //     featured: true
  //   },
  //   {
  //     title: "WeatherNow",
  //     description:
  //       "A sleek weather dashboard showing 7-day forecasts, interactive maps, and weather alerts using the OpenWeather API.",
  //     image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["JavaScript", "CSS", "OpenWeather API"],
  //     github: "#",
  //     demo: "#",
  //     featured: false
  //   },
  //   {
  //     title: "DevBlog Platform",
  //     description:
  //       "A markdown-powered blog platform with syntax highlighting, dark mode, and a headless CMS. Fully responsive and SEO-optimized.",
  //     image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["React", "Tailwind", "Markdown", "SEO"],
  //     github: "#",
  //     demo: "#",
  //     featured: false
  //   },
  //   {
  //     title: "CryptoTrack",
  //     description:
  //       "Real-time cryptocurrency price tracker with portfolio management, price alerts, and interactive chart visualizations.",
  //     image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["React", "TypeScript", "Chart.js", "CoinGecko API"],
  //     github: "#",
  //     demo: "#",
  //     featured: false
  //   },
  //   {
  //     title: "RestaurantHub",
  //     description:
  //       "Landing page and reservation system for a restaurant. Features online booking, menu showcase, and Google Maps integration.",
  //     image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["HTML", "CSS", "JavaScript", "Google Maps API"],
  //     github: "#",
  //     demo: "#",
  //     featured: false
  //   }
];

const tagColors: Record<string, string> = {
  React: "bg-sky-400/10 text-sky-400 border-sky-400/20",
  TypeScript: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  JavaScript: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Supabase: "bg-green-400/10 text-green-400 border-green-400/20",
  Tailwind: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  "Node.js": "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  PostgreSQL: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20",
  HTML: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  CSS: "bg-blue-300/10 text-blue-300 border-blue-300/20"
};

function getTagClass(tag: string) {
  return tagColors[tag] ?? "bg-slate-400/10 text-slate-400 border-slate-400/20";
}

export default function Projects() {
  const containerRef = useRevealAll();

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent" />

      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="section-badge rounded-full px-4 py-1.5 font-mono text-xs">03. projects</span>
          <h2 className="mt-6 mb-4 text-4xl font-black text-white lg:text-5xl">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          <p className="mx-auto max-w-lg text-slate-400">
            Men yaratgan loyihalar tanlovi — konsepsiyadan tortib ishlab chiqarishgacha.{" "}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal project-card glass-card group flex flex-col overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="project-overlay absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-sky-400/50"
                    onClick={e => e.stopPropagation()}
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-sky-500/90 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-400"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/20 px-2.5 py-1 text-xs font-medium text-amber-400 backdrop-blur-sm">
                    <Star size={10} />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-sky-400">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getTagClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action row */}
                <div className="flex gap-3 border-t border-white/5 pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1.5 text-xs font-medium text-sky-400 transition-colors hover:text-sky-300"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="flex justify-center text-5xl">Not yet</h1>

        {/* View more CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
