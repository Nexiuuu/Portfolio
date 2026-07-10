import { heroContent } from "@/data/hero"

export const HeroContent = () => {
    const { name, role, description } = heroContent;

    return (
        <div className="gap-4">
            <h1 className="flex flex-col">
                <span className="text-slate-400 tracking-wide text-lg">
                    Hi, I'm
                </span>

                <span className="
                    font-bold
                    tracking-wider 
                    uppercase 
                    text-5xl md:text-6xl
                    leading-none

                    bg-gradient-to-r
                    from-white
                    to-slate-300

                    bg-clip-text
                    text-transparent
                  "
                >
                    {name} 👋
                </span>
            </h1>

            <h2 className="text-blue-400 text-xl font-semibold">
                {role}
            </h2>

            <p className="max-w-lg leading-7 text-slate-400 mt-4">
                {description}
            </p>
        </div>
    )
}