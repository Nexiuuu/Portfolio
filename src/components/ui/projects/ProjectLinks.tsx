interface ProjectLinksProps {
    githubUrl?: string;
    liveUrl?: string;
}

export const ProjectLinks = ({ githubUrl, liveUrl }: ProjectLinksProps) => {
    const buttonStyles = `
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-slate-700
        bg-transparent
        px-4
        py-2
        text-sm
        font-medium
        text-slate-300
        
        hover:border-blue-400
        hover:text-blue-400
        
        transition-colors
        duration-200
    `;

    return (
        <div className="flex gap-3">
            {liveUrl && (
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles}
                >
                    Live Demo
                </a>
            )}

            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles}
                >
                    GitHub
                </a>
            )}
        </div>
    );
};