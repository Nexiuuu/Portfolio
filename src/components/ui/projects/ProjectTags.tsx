interface ProjectTagsProps {
    technologies: string[];
}

const technologyStyles: Record<string, string> = {
    React: `
        bg-cyan-400/10
        text-cyan-400
        border-cyan-400/20
    `,
    TypeScript: `
        bg-blue-400/10
        text-blue-400
        border-blue-400/20
    `,
    "Tailwind CSS": `
        bg-teal-400/10
        text-teal-400
        border-teal-400/20
    `,
    Vite: `
        bg-purple-400/10
        text-purple-400
        border-purple-400/20
    `,
};

const defaultTagStyle = "bg-slate-800 text-slate-300 border-slate-700";

export const ProjectTags = ({ technologies }: ProjectTagsProps) => {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => {
                const tagStyle = technologyStyles[technology] || defaultTagStyle;

                return (
                    <span
                        key={technology}
                        className={`
                            px-3 
                            py-1.5

                            rounded-full 

                            text-xs 
                            font-medium 

                            border
                            select-none

                            transition-all
                            duration-200

                            hover:scale-105
                            hover:brightness-110
                            ${tagStyle}
                        `}
                    >
                        {technology}
                    </span>
                );
            })}
        </div>
    );
};