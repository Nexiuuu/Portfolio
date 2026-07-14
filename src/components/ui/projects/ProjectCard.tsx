import type { Project } from "@/types/projects";
import { ProjectImage } from "./ProjectImage";
import { ProjectContent } from "./ProjectContent";

export const ProjectCard = ({
    title,
    description,
    technologies,
    image,
    githubUrl,
    liveUrl,
}: Project) => {
    return (
        <article className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/50
            p-6
            space-y-4
            hover:border-slate-700
            hover:-translate-y-1
            transition-all
            duration-300
            hover:shadow-[0_0_40px_rgba(59,130,246,.12)]
          "
        >
            <ProjectImage image={image} />

            <ProjectContent
                title={title}
                description={description}
                technologies={technologies}
                liveUrl={liveUrl}
                githubUrl={githubUrl}
            />
        </article>
    )
}