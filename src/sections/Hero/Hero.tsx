import { Container } from "@/components/layout/Container";
import { HeroVisual } from "@/components/ui/hero/HeroVisual";
import { Terminal } from "@/components/ui/terminal/Terminal";
import { HeroActions } from "@/components/ui/hero/HeroActions";
import { HeroContent } from "@/components/ui/hero/HeroContent";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Column with graphic */}
                    <HeroVisual />

                    {/* Column with content */}
                    <div className="space-y-8">
                        <Terminal />

                        <HeroContent />

                        <HeroActions />
                    </div>

                </div>
            </Container>
        </section>
    );
};