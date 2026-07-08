import { TerminalCursor } from "@/components/ui/terminal/TerminalCursor";
import { TerminalHeader } from "@/components/ui/terminal/TerminalHeader";
import { TerminalHistory } from "@/components/ui/terminal/TerminalHistory";

export const Terminal = () => {
    return (
        <div className="
        rounded-xl

        border
        border-slate-800

        bg-slate-950/80

        backdrop-blur

        shadow-2xl

        overflow-hidden
        ">
            <TerminalHeader />
            <TerminalHistory />
            <TerminalCursor />
        </div>
    )
}