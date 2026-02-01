import { ProjectCard } from "@/components/sub/project-card";
import { poppins, PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col flex-wrap h-auto w-full items-center justify-center mt-20"
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

      <div className="h-auto w-full grid grid-cols-2 md:grid-cols-3 flex-wrap gap-10">
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
         <div className="  flex flex-row gap-5 ">
          <a
            href="/wonder-app/steves_franc_t_cv.pdf"
            download
            className="
    inline-flex
    items-center
    justify-center
    h-[42px]
    px-6
    text-md
    text-gray-200
    bg-[rgba(3,0,20,0.37)]
    border border-[rgba(112,66,248,0.38)]
    rounded-full
    hover:bg-[rgba(112,66,248,0.15)]
    transition
    duration-200
    text-sm
  "
          >
            Voir plus
          </a>

        </div>
      </div>
    </section>
  );
};
