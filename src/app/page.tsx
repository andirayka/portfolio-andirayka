import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
}
