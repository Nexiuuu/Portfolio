import type { Project } from "@/types/projects";
import { ProjectTags } from "./ProjectTags";
import { ProjectLinks } from "./ProjectLinks";

type ProjectContentProps = Pick<
    Project,
    "title" | "description" | "technologies" | "liveUrl" | "githubUrl"
>;

export const ProjectContent = ({
    title,
    description,
    technologies,
    liveUrl,
    githubUrl,
}: ProjectContentProps) => {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="font-bold text-2xl md:text-3xl text-slate-100">
                    {title}
                </h3>
                <p className="text-slate-300 leading-7">{description}</p>
            </div>

            <ProjectTags technologies={technologies} />

            <div className="pt-2">
                <ProjectLinks
                    liveUrl={liveUrl}
                    githubUrl={githubUrl}
                />
            </div>
        </div>
    );
};