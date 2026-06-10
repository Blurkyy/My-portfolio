"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AntiGravityParticles from "../components/AntiGravityParticles";
import { useTheme } from "../components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen relative transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-[#f4f4f6] text-gray-900"
      }`}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <AntiGravityParticles />
    </main>
  );
}