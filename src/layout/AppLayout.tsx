import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/sections/Hero/Hero";
import { About } from "@/sections/About/About";
import { Projects } from "@/sections/Projects/Projects";
import { Contact } from "@/sections/Contact/Contact";


export const AppLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Hero/>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}