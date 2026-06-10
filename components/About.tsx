export default function About() {
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
            <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
              Crafting Digital Experiences
            </h2>
          </div>
          <div className="w-full md:max-w-xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Self-taught front-end developer with hands-on experience building and designing web platforms for admin dashboards and merchant systems. Skilled in creating clean, responsive interfaces, improving user experience, and performing quality assurance.
            </p>
          </div>
        </div>

        {/* Skill Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Front-End & Dashboards */}
          <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700/50 hover:bg-neutral-900/50 hover:shadow-2xl hover:shadow-violet-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Frontend & Web Platforms</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experienced in designing and building feature-rich admin dashboards and merchant systems. Focuses on component-driven, reusable code architecture.
              </p>
            </div>
          </div>

          {/* Card 2: UX & QA */}
          <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700/50 hover:bg-neutral-900/50 hover:shadow-2xl hover:shadow-cyan-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">UX Optimization & QA</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dedicated to improving usability and user retention by polishing visual interactions, ensuring responsiveness, and conducting detailed quality assurance.
              </p>
            </div>
          </div>

          {/* Card 3: Creative & Strategy */}
          <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700/50 hover:bg-neutral-900/50 hover:shadow-2xl hover:shadow-fuchsia-500/5 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-6 text-fuchsia-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Creative Design & Media</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Brings a rich background in social media management and creative design, ensuring a holistic, brand-aligned approach to web and application design.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-16 border-t border-neutral-900 pt-12">
          <h3 className="text-xl font-semibold text-white mb-6 tracking-tight">
            Technical Stack & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "React", color: "from-blue-500 to-cyan-400" },
              { name: "Next.js", color: "from-neutral-400 to-white" },
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
                className="group relative px-4 py-2.5 rounded-xl bg-neutral-950/40 border border-neutral-850 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300 flex items-center gap-2.5"
              >
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`} />
                <span className="text-gray-300 text-sm font-semibold group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Banner / Property Consultants */}
        <div className="mt-16 group relative rounded-2xl border border-neutral-850 bg-gradient-to-r from-neutral-900/40 via-neutral-950/20 to-neutral-900/40 p-8 md:p-10 backdrop-blur-md hover:border-neutral-750 transition-all duration-350">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="max-w-2xl">
              <h4 className="text-xl font-semibold text-white mb-2">
                Business-Ready Solutions
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Passionate about delivering professional, production-grade websites — including customized web platforms for property consultants and agency dashboards.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
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
