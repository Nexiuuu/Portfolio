import { TerminalCursor } from "@/components/ui/terminal/TerminalCursor";
import { TerminalHeader } from "@/components/ui/terminal/TerminalHeader";
import { TerminalHistory } from "@/components/ui/terminal/TerminalHistory";

export const Terminal = () => {
    return (
        <div className="
        rounded-xl
        overflow-hidden

        border
        border-white/10

        bg-gradient-to-b
        from-slate-900/90
        to-slate-950/95

        backdrop-blur-md

        shadow-2xl
        ">
            <TerminalHeader />
            <TerminalHistory />
            <TerminalCursor />
        </div>
    )
}