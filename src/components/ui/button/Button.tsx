import type { ButtonProps } from "@/types/button";

export const Button = ({label, href, variant="primary"}: ButtonProps) => {
    const variants = {
        primary: "",
        secondary: "",
    }

    return (
        <a className={variants[variant]} href={href}>
            {label}
        </a>
    )
}