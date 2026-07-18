import { Container } from "@/components/layout/Container"
import { ContactHeader } from "@/components/ui/contact/ContactHeader"
import { ContactGrid } from "@/components/ui/contact/ContactGrid"

export const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <Container>
                <div>
                    <ContactHeader />

                    <ContactGrid />
                </div>
            </Container>
        </section>
    )
}