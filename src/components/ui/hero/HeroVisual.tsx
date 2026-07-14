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
    <div className="absolute inset-0 flex items-center justify-center">
      
      {/* Outer Ring - Spins clockwise */}
      <div className="absolute w-5/6 aspect-square animate-[spin_60s_linear_infinite]">
        {/* Dashed outer ring line */}
        <div className="absolute inset-0 rounded-full border border-dashed border-slate-700/40" />
        
        {/* Cyan satellite */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="-translate-x-1/2 relative flex items-center justify-center">
            <div className="absolute w-4 h-4 rounded-full bg-cyan-400/40 blur-[4px] animate-ping" />
            <div className="relative w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
          </div>
        </div>
      </div>

      {/* Inner Ring - Spins counter-clockwise */}
      <div className="absolute w-3/4 aspect-square scale-90 animate-[spin_40s_linear_reverse_infinite]">
        {/* Solid inner ring line */}
        <div className="absolute inset-0 rounded-full border border-slate-800" />
        
        {/* Fuchsia satellite */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="translate-x-1/2 relative flex items-center justify-center">
            <div className="absolute w-4 h-4 rounded-full bg-fuchsia-400/40 blur-[4px] animate-ping" />
            <div className="relative w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_#d946ef]" />
          </div>
        </div>
      </div>

    </div>
  );
};

interface ImageWrapperProps {
  children?: ReactNode;
}

const ImageWrapper = ({ children }: ImageWrapperProps) => (
  <div className="
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
    {children ? (
      children 
    ) : (
      <span className="text-slate-500 text-sm font-mono select-none">
        Profile Photo
      </span>
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
      "
    >
      {/* Background Layers */}
      <AmbientGlow />
      <GridEffect />

      {/* Interactive Graphic Container */}
      <div className="
        relative
        w-full
        max-w-md lg:max-w-lg
        aspect-square
        flex
        items-center
        justify-center"
      >
        {/* Dynamic Orbiting Rings */}
        <Orbit />
        
        {/* Soft Blur Circle under the image to enhance separation */}
        <div className="
          absolute
          w-2/3
          aspect-square
          rounded-full
          bg-violet-500/10
          blur-2xl
          "
        />

        {/* Foreground Profile Image Container */}
        <ImageWrapper>{children}</ImageWrapper>
      </div>
    </div>
  );
};