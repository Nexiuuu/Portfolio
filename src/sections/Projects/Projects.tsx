import { Container } from "@/components/layout/Container"
import { ProjectsHeader } from "@/components/ui/projects/ProjectsHeader"
import { ProjectsGrid } from "@/components/ui/projects/ProjectsGrid"

export const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <Container>
                <div className="space-y-12">
                    <ProjectsHeader />

                    <ProjectsGrid />
                </div>
            </Container>
        </section>
    )
}