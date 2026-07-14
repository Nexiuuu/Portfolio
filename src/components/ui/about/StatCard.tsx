import type { AboutStat } from "@/types/about";

export const StatCard = ({ value, label }: AboutStat) => {
    return (
        <article className="
            flex
            flex-col
            gap-2
            
            rounded-xl
            border
            border-slate-800

            bg-slate-900/50
            backdrop-blur-sm

            p-6

            transition-all
            duration-300

            hover:-translat-y-1
            hover:border-blue-500/40
            "
        >
            <span className="
                text-3xl
                font-bold
                text-white
                "
            >
                {value}
            </span>

            <span className="
                text-sm
                text-slate-400
                "
            >
                {label}
            </span>
        </article>
    );
};