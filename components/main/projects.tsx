import { ProjectCard } from "@/components/sub/project-card";
import {  PROJECTS } from "@/public/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col flex-wrap h-auto w-full overflow-x-hidden items-center justify-center mt-20"
    >
      <div className="h-auto w-full grid grid-cols-1 md:grid-cols-3 flex-wrap gap-10">
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
            href="/steves_franc_t_cv.pdf"
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
