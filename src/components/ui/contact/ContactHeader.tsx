import { contactContent } from "@/data/contact"

export const ContactHeader = () => {
    const { description } = contactContent;

    return (
        <header className="space-y-3">
            <span className="text-sm uppercase tracking-[0.3em] text-blue-400">
                CONTACT
            </span>
    
            <h2 className="text-3xl font-bold md:text-4xl">
                Let's Work Together
            </h2>

            <p className="max-w-2xl text-slate-400 leading-7">
                {description}
            </p>
        </header>
    )
}