"use client";

import { useTheme } from "./ThemeProvider";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`
        sticky top-0 z-50 flex justify-between items-center px-8 py-5
        backdrop-blur-md border-b
        ${isDark
          ? "bg-black/70 border-white/5 text-white"
          : "bg-white/70 border-black/8 text-gray-900"}
      `}
    >
      {/* Logo */}
      <h1
        className={`text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${
          isDark
            ? "from-white to-gray-400"
            : "from-gray-900 to-gray-500"
        }`}
      >
        Michael
      </h1>

      {/* Nav links + Toggle */}
      <div className="flex items-center gap-6">
        {["about", "projects", "contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={`capitalize text-sm font-medium transition-colors duration-200 ${
              isDark
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {link}
          </a>
        ))}

        {/* Theme toggle */}
        <button
          id="theme-toggle"
          onClick={toggle}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className={`
            relative w-10 h-10 rounded-xl flex items-center justify-center
            transition-all duration-300 hover:scale-110 active:scale-95
            ${isDark
              ? "bg-neutral-900 text-yellow-400 hover:bg-neutral-800 border border-neutral-700"
              : "bg-gray-100 text-violet-600 hover:bg-gray-200 border border-gray-200"}
          `}
        >
          <span className="transition-transform duration-500">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </span>
        </button>
      </div>
    </nav>
  );
}