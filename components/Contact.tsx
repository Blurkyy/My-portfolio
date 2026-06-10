export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/60 border-t border-neutral-900">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Have a project in mind, want to discuss web platforms, or need professional web solutions? Reach out via phone or email.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Phone Card */}
          <div className="group relative rounded-3xl border border-neutral-850 bg-neutral-950/40 p-8 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-neutral-900/40 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phone Numbers</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+251908346566"
                  className="text-gray-400 hover:text-white text-lg transition-colors font-medium hover:underline"
                >
                  +251 908 346 566
                </a>
                <a
                  href="tel:+251712609291"
                  className="text-gray-400 hover:text-white text-lg transition-colors font-medium hover:underline"
                >
                  +251 712 609 291
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative rounded-3xl border border-neutral-850 bg-neutral-950/40 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-neutral-900/40 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Address</h3>
              <a
                href="mailto:michaelmesfin202@gmail.com"
                className="text-gray-400 hover:text-white text-lg transition-colors font-medium hover:underline"
              >
                michaelmesfin202@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Michael Mesfin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
