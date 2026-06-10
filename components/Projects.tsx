"use client";

import { useTheme } from "./ThemeProvider";

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projectsList = [
    {
      title: "Yegna Home",
      category: "Hospitality & Booking Platform",
      description:
        "A premium digital hospitality booking platform in Ethiopia that enables seamless accommodation bookings for domestic and international travelers. Built with high-performance responsive interfaces, the ecosystem features integration with Ethiopian Airlines Sheba Miles and custom admin dashboards for merchants and property owners.",
      url: "https://yegnahome.com/",
      color: "amber",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Admin Dashboards", "API Integration", "Mobile Booking"],
      glowClass: "from-amber-600/10",
      accentText: "text-amber-400",
      accentBg: "bg-amber-400/10",
      accentBorder: "group-hover:border-amber-500/40",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Arkena Coffee Market",
      category: "B2B Direct-Trade Agritech",
      description:
        "A decentralized direct-trade digital marketplace designed to connect Ethiopian smallholder coffee farmers directly with international coffee buyers. Includes a comprehensive suite of digital tools for quality control, farm specifications management, live price tracking, and multilingual communication interfaces.",
      url: "https://arkenacoffee.com/",
      color: "emerald",
      tags: ["React", "Tailwind CSS", "Interactive Maps", "Merchant Portals", "Direct-Trade Tools", "Localization"],
      glowClass: "from-emerald-600/10",
      accentText: "text-emerald-400",
      accentBg: "bg-emerald-400/10",
      accentBorder: "group-hover:border-emerald-500/40",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const sectionBg = isDark
    ? "bg-black/40 border-t border-neutral-900"
    : "bg-gray-100/60 border-t border-gray-200";

  const cardBase = isDark
    ? "border-neutral-850 bg-neutral-950/40 hover:bg-neutral-900/40"
    : "border-gray-200 bg-white/80 hover:bg-white shadow-sm hover:shadow-md";

  const tagClass = isDark
    ? "bg-neutral-900 text-gray-400 border-neutral-800"
    : "bg-gray-100 text-gray-500 border-gray-200";

  const dividerClass = isDark ? "border-neutral-900" : "border-gray-200";

  const iconBg = isDark ? "bg-neutral-900" : "bg-gray-100";

  return (
    <section id="projects" className={`py-24 relative overflow-hidden ${sectionBg}`}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">
            My Portfolio
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-2 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Featured Projects
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl border p-8 backdrop-blur-md transition-all duration-350 hover:-translate-y-2 hover:shadow-3xl hover:shadow-violet-600/5 flex flex-col justify-between ${cardBase} ${project.accentBorder}`}
            >
              {/* Card top gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.glowClass} to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-350`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.accentBg} ${project.accentText}`}>
                    {project.category}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} ${project.accentText}`}>
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm md:text-base leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs px-3 py-1 rounded-md border ${tagClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className={`relative z-10 pt-4 border-t ${dividerClass}`}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold group/btn hover:opacity-90 transition-opacity ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Visit Website
                  <svg
                    className={`w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform ${isDark ? "text-gray-400 group-hover/btn:text-white" : "text-gray-400 group-hover/btn:text-gray-900"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
