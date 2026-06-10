import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AntiGravityParticles from "../components/AntiGravityParticles";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <AntiGravityParticles />
    </main>
  );
}