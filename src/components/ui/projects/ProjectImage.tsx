interface ProjectImageProps {
    image: string;
}

export const ProjectImage = ({ image }: ProjectImageProps) => {
    return (
        <div
            className="
                group
                overflow-hidden
                rounded-xl

                border
                border-slate-800
                hover:border-slate-700

                bg-slate-950

                transition-all
                duration-300
            "
        >
            {/* Browser Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    border-b
                    border-slate-800

                    bg-slate-900/70
                    backdrop-blur-sm
                "
            >
                <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="text-xs text-slate-500">
                    portfolio.dev
                </span>
            </div>

            {/* Screenshot Container */}
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt="Project preview"
                    className="
                        w-full
                        h-auto

                        object-cover

                        transition-transform
                        duration-500
                        ease-out

                        group-hover:scale-[1.03]
                    "
                />

                {/* Gradient Overlay */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950/30
                        to-transparent
                        
                        transition-opacity
                        duration-300
                    "
                />
            </div>
        </div>
    );
};