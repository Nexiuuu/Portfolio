import type { ButtonProps } from "@/types/button";

export const heroButtons: ButtonProps[] = [
    {
        id: "download-cv",
        label: "Download CV", 
        href: "/cv.pdf", 
        variant: "primary",
    },
    { 
        id: "view-projects",
        label: "View Projects", 
        href: "/cv.pdf",
        variant: "secondary",
    },
]

export const heroContent = {
    name: "Alan",
    role: "Frontend Developer",
    description: "..."
}