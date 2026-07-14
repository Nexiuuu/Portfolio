import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsGrid = () => {
    const featuredProjects = projects.filter(
        (project) => project.featured
    );

    return (
        <div className="grid gap-6  mt-12 md:grid-cols-2">
            {featuredProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    {...project}
                />
            ))}
        </div>
    );
};