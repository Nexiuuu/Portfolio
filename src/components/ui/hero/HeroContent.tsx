import { heroContent } from "@/data/hero"

export const HeroContent = () => {
    return (
        <div>
            <h1>
                {heroContent.name}
            </h1>

            <h2>
                {heroContent.role}
            </h2>

            <p>
                {heroContent.description}
            </p>
        </div>
    )
}