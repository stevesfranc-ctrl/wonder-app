import { Embition } from "@/components/main/embition";
import { Entreprises } from "@/components/main/entreprises";
import { Footer } from "@/components/main/footer";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className=" h-screen w-full overflow-scroll">
      <div className="flex flex-col  m-auto">
        <Hero />
        <Skills />
        <Embition />
        <Entreprises />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}