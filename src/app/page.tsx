import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Animated background for visual sophistication */}
      <AnimatedBackground />

      {/* Main content sections with improved flow */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </div>

      {/* Footer with subtle attribution */}
      <footer className="py-8 text-center text-foreground/50 text-sm">
        <p>© {new Date().getFullYear()} Andi Rayka. All rights reserved.</p>
      </footer>
    </main>
  );
}
