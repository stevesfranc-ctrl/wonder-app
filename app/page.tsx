import ContactSection from "@/components/main/contact";
import { Footer } from "@/components/main/footer";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className=" h-screen w-full overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col  ">
        <Hero />
        <Skills />
        {/* <Embition /> */}
        {/* <Entreprises /> */}
        <Projects />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}