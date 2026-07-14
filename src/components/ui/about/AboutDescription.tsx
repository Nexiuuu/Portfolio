import { aboutContent } from "@/data/about"

export const AboutDescription = () => {
    const { description } = aboutContent;

    return (
        <p className="
            max-w-3xl
            text-slate-300
            leading-8
            text-lg
            whitespace-pre-line
          "
        >
            {description}
        </p>
    )
}