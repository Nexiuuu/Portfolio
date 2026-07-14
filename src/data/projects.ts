import type { Project } from "@/types/projects";
import PortfolioImage from "@/assets/PortfolioImage.png";

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio",
        description: "Personal portfolio built with React and Tailwind CSS.",
        image: PortfolioImage,
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
        ],
        githubUrl: "https://github.com/Nexiuuu/Portfolio",
        liveUrl: "https://...",
        featured: true,
    },
];