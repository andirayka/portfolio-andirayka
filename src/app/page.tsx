import About from "@/components/About";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main className="w-3/4 flex flex-col items-center gap-32">
      <Introduction />
      <About />
      <Experience />
    </main>
  );
}
