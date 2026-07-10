import type { ButtonProps } from "@/types/button";

export const Button = ({ label, href, variant = "primary" }: ButtonProps) => {
    const baseStyles = `
        inline-flex
        items-center
        justify-center

        rounded-xl
        border

        px-4
        py-3

        font-medium
        text-slate-300

        transition-all
        duration-300

        hover:-translate-y-0.5

        active:scale-95

        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        focus:ring-offset-2
        focus:ring-offset-slate-950
    `;

    const variantStyles = {
        primary: `
            bg-blue-400
            border-transparent
            text-slate-900

            hover:bg-blue-500
            hover:shadow-blue-500/20
        `,
        secondary: `
            bg-transparent
            border-slate-700
            
            hover:border-slate-500
            hover:bg-slate-800/40
        `,
    }

    return (
        <a
            href={href}
            className={`${baseStyles} ${variantStyles[variant]}`}
        >
            {label}
        </a>
    )
}