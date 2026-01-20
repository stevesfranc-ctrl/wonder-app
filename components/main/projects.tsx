import { ProjectCard } from "@/components/sub/project-card";
import { poppins, PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col  px-20  bg-white"
    >
      {/* <h1 className="font-heading text-2xl font-bold tracking-tight text-primary-600 sm:leading-none lg:text-4xl text-zinc-400">
        Experiences
      </h1>

      <span
        className={cn(
          "text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem] max-w-[70%] my-6",
          poppins.className
        )}
      >
        I'm a passionate Full Stack Software Engineer specializing in web, mobile, and software development.
        I design and build efficient, scalable, and user-centric applications — from dynamic front-ends to robust back-end architectures.
      </span> */}

      <div className="h-auto w-full grid grid-cols-2 md:grid-cols-4 flex-wrap gap-10 mt-20">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      <div className="mt-8">
        <button className="border-[#2A0E61] border-[.5px] h-[40px] rounded-full text-zinc-400 px-6 font-light hover:bg-[#2A0E61] hover:text-white">
          Voir plus
        </button>
      </div>
    </section>
  );
};
