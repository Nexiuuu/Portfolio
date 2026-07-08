import { terminalHistory } from "@/data/terminal";

export const TerminalHistory = () => {
    return (
        <div className="
            font-mono 
            text-sm
            leading-relaxed
            
            px-4 
            py-3 
            space-y-2"
        >
            {terminalHistory.map((entry) => (
                <div key={entry.id}>
                    {entry.type === "command" ? (
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-400">$</span> 
                            <span className="text-slate-100">
                                {entry.text}
                            </span>
                        </div>
                    ) : (
                        <div className="text-zinc-400">
                            {entry.text}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}