import { terminalHistory } from "@/data/terminal";

export const TerminalHistory = () => {
    return (
        <div className="
            font-mono 
            text-sm 
            leading-relaxed 
            px-4 py-3
            "
        >
            {terminalHistory.map((entry) =>
                entry.type === "command" ? (
                    <div key={entry.id} className="flex items-center gap-2 py-0.5">
                        <span className="text-emerald-400 font-semibold select-none">$</span>
                        <span className="text-slate-200">{entry.text}</span>
                    </div>
                ) : (
                    <div key={entry.id} className="
                        py-0.5 
                        mb-4 
                        text-slate-400 

                        last:mb-0
                        "
                    >
                        {entry.text}
                    </div>
                )
            )}
        </div>
    );
};