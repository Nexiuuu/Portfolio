import { Container } from "@/components/layout/Container"
import { AboutHeader } from "@/components/ui/about/AboutHeader"
import { AboutDescription } from "@/components/ui/about/AboutDescription"
import { AboutStats } from "@/components/ui/about/AboutStats"

export const About = () => {
    return (
        <section id="about" className="py-24">
            <Container>
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    
                    <div className="space-y-8">
                        <AboutHeader />
                        <AboutDescription />

                    </div>

                    <div>
                        <AboutStats />
                    </div>

                </div>
            </Container>
        </section>
    )
}