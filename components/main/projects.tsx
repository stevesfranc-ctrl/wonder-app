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
    </section>
  );
};
