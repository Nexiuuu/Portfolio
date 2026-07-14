import { aboutStats } from "@/data/about"
import { StatCard } from "./StatCard"

export const AboutStats = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat) => (
                <StatCard key={stat.id} {...stat} />
            ))}
        </div>
    )
}