"use client";

import { useTheme } from "./ThemeProvider";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const card = isDark
    ? "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700/50 hover:bg-neutral-900/50"
    : "border-gray-200 bg-white/70 hover:border-gray-300 hover:bg-white/90 shadow-sm";

  const skillBadge = isDark
    ? "bg-neutral-950/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40"
    : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm";

  const banner = isDark
    ? "border-neutral-850 bg-gradient-to-r from-neutral-900/40 via-neutral-950/20 to-neutral-900/40 hover:border-neutral-750"
    : "border-gray-200 bg-gradient-to-r from-white/80 via-gray-50/60 to-white/80 hover:border-gray-300 shadow-sm";

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">
              About Me
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold mt-2 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Crafting Digital Experiences
            </h2>
          </div>
          <div className="w-full md:max-w-xl">
            <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Self-taught front-end developer with hands-on experience building and designing web platforms for admin dashboards and merchant systems. Skilled in creating clean, responsive interfaces, improving user experience, and performing quality assurance.
            </p>
          </div>
        </div>

        {/* Skill Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Front-End & Dashboards */}
          <div className={`group relative rounded-2xl border p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/5 ${card}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Frontend & Web Platforms</h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Experienced in designing and building feature-rich admin dashboards and merchant systems. Focuses on component-driven, reusable code architecture.
              </p>
            </div>
          </div>

          {/* Card 2: UX & QA */}
          <div className={`group relative rounded-2xl border p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5 ${card}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>UX Optimization & QA</h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Dedicated to improving usability and user retention by polishing visual interactions, ensuring responsiveness, and conducting detailed quality assurance.
              </p>
            </div>
          </div>

          {/* Card 3: Creative & Strategy */}
          <div className={`group relative rounded-2xl border p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/5 md:col-span-2 lg:col-span-1 ${card}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-6 text-fuchsia-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Creative Design & Media</h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Brings a rich background in social media management and creative design, ensuring a holistic, brand-aligned approach to web and application design.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className={`mt-16 border-t pt-12 ${isDark ? "border-neutral-900" : "border-gray-200"}`}>
          <h3 className={`text-xl font-semibold mb-6 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Technical Stack & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "React", color: "from-blue-500 to-cyan-400" },
              { name: "Next.js", color: isDark ? "from-neutral-400 to-white" : "from-gray-600 to-gray-900" },
              { name: "HTML", color: "from-orange-500 to-amber-500" },
              { name: "CSS", color: "from-blue-600 to-indigo-500" },
              { name: "TypeScript", color: "from-blue-500 to-sky-400" },
              { name: "JavaScript", color: "from-yellow-400 to-amber-400" },
              { name: "Node.js", color: "from-green-500 to-emerald-400" },
              { name: "PostgreSQL", color: "from-blue-700 to-indigo-500" },
              { name: "Tailwind CSS", color: "from-cyan-400 to-teal-400" },
              { name: "SEO", color: "from-fuchsia-500 to-pink-500" },
            ].map((skill, index) => (
              <div
                key={index}
                className={`group relative px-4 py-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2.5 ${skillBadge}`}
              >
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`} />
                <span className={`text-sm font-semibold transition-colors ${isDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"}`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Banner */}
        <div className={`mt-16 group relative rounded-2xl border p-8 md:p-10 backdrop-blur-md transition-all duration-350 ${banner}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="max-w-2xl">
              <h4 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                Business-Ready Solutions
              </h4>
              <p className={`text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Passionate about delivering professional, production-grade websites — including customized web platforms for property consultants and agency dashboards.
              </p>
            </div>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-lg ${
                isDark
                  ? "bg-white text-black hover:bg-neutral-200 shadow-white/5"
                  : "bg-gray-900 text-white hover:bg-gray-700 shadow-black/10"
              }`}
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
