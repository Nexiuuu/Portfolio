import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/layout/Container";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileMenuClasses = isOpen
        ? "max-h-96 opacity-100"
        : "max-h-0 opacity-0 border-transparent";

    return (
        <nav className="sticky top-0 backdrop-blur-md bg-slate-950/60 border-b border-white/10 h-16 z-50">
            <Container className="relative h-full">
                <div className="flex h-full items-center justify-between">
                    <a
                        href="#hero"
                        className="text-2xl font-semibold tracking-wide hover:text-blue-400 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Alan
                    </a>

                    <button
                        aria-label="Toggle menu"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="
                            md:hidden
                            text-2xl
                            text-white
                            transition-transform
                            duration-200
                            hover:scale-110
                        "
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>

                    <ul className="hidden items-center gap-8 text-sm md:flex">
                        {navigationItems.map((item) => (
                            <li key={item.sectionId}>
                                <a
                                    href={`#${item.sectionId}`}
                                    className="
                                        relative
                                        py-2
                                        text-neutral-300
                                        transition-colors
                                        duration-200
                                        hover:text-white
                                        after:absolute
                                        after:bottom-0
                                        after:left-0
                                        after:h-[2px]
                                        after:w-0
                                        after:bg-blue-400
                                        after:transition-all
                                        after:duration-300
                                        hover:after:w-full
                                        cursor-pointer
                                        "
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                        absolute
                        left-0
                        top-16
                        w-full
                        overflow-hidden
                        border-b
                        border-white/10
                        bg-slate-950/95
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        md:hidden
                        ${mobileMenuClasses}
                      `}
                >
                    <ul className="flex flex-col py-4">
                        {navigationItems.map((item) => (
                            <li key={item.sectionId}>
                                <a
                                    href={`#${item.sectionId}`}
                                    onClick={() => setIsOpen(false)}
                                    className="
                                            block
                                            px-2
                                            py-3
                                            text-neutral-300
                                            transition-colors
                                            duration-200
                                            hover:text-white
                                            hover:bg-white/5
                                        "
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </nav>
    )
}