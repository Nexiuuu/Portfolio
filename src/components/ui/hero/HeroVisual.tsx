import type { ReactNode } from "react";

const AmbientGlow = () => (
  <div className="
    absolute 
    inset-0 
    rounded-full
    bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/30 
    blur-3xl 
    scale-75 
    " 
  />
);

const GridEffect = () => (
  <div className="
    absolute 
    inset-0 
    opacity-10 
    bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] 
    bg-[size:1.5rem_1.5rem]" 
    />
);

const Orbit = () => {
    return (
        <div className="
            absolute 
            inset-0 
            flex 
            items-center 
            justify-center 
            animate-[spin_80s_linear_infinite]" 
        >
            {/* Outer Ring */}
            <div className="
                absolute 
                w-5/6 
                aspect-square
                rounded-full 
                border 
                border-slate-800"
            />

            {/* Inner Ring */}
            <div className="
                absolute w-3/4 aspect-square
                rounded-full border border-slate-800/40"
            />

            {/* Satellite in Outer Ring (w-5/6) */}
            <div className="absolute w-5/6 aspect-square flex items-center justify-start">
                <div className="-translate-x-1/2 relative flex items-center justify-center">
                
                    <div className="
                        absolute
                        w-4 h-4
                        rounded-full
                        bg-cyan-400
                        blur-[4px]
                        animate-ping
                        opacity-75"
                    />

                    <div className="
                        relative
                        w-2.5 h-2.5
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_15px_#22d3ee]"
                    />
                </div>
            </div>
        </div>
    )
};

interface ImageWrapperProps {
  children?: ReactNode;
}

const ImageWrapper = ({ children }: ImageWrapperProps) => (
    <div className="
        absolute
        relative

        flex
        items-center
        justify-center

        w-2/3
        aspect-square

        overflow-hidden
        rounded-full

        border
        border-slate-700/60

        bg-slate-900/40
        backdrop-blur-sm

        shadow-2xl

        before:absolute
        before:inset-0
        before:rounded-full
        before:border
        before:border-white/5
        "
    >
        {children || (
            <div className="text-slate-500 text-sm font-mono select-none">
                Profile Photo
            </div>
        )}
  </div>
);

interface HeroVisualProps {
    children?: ReactNode;
}

export const HeroVisual = ({ children }: HeroVisualProps) => {
    return (
        <div className="
            relative 
            flex 
            items-center 
            justify-center 
            min-h-[25rem] md:min-h-[30rem] lg:min-h-[35rem]
            rounded-2xl 
            overflow-hidden 
            border 
            border-slate-800 
            bg-slate-900/50
            ">
            
            <AmbientGlow />
            <GridEffect />

            <div className="
                relative
                w-full
                max-w-md lg:max-w-lg
                aspect-square
                flex
                items-center
                justify-center"
            >
                <Orbit />
                <ImageWrapper>{children}</ImageWrapper>
            </div>
        </div>
    )
}