export const TerminalHeader = () => {
    return (
        <header>
            <div className="flex items-center justify-between px-4 h-11">
                <div className="flex gap-1.5">
                    <span className="
                        h-3 w-3 
                        rounded-full 
                        bg-red-500 
                        shadow-[0_0_6px_rgba(239,68,68,.35)]
                      " 
                    />
                    <span className="
                        h-3 w-3 
                        rounded-full 
                        bg-yellow-500 
                        shadow-[0_0_6px_rgba(239,68,68,.35)]
                      " 
                    />
                    <span className="
                        h-3 w-3 
                        rounded-full 
                        bg-green-500 
                        shadow-[0_0_6px_rgba(239,68,68,.35)]
                      " 
                    />
                </div>

                <span className="
                    text-xs
                    font-mono
                    tracking-wide
                    text-slate-500
                    select-none"
                >
                    alan@portfolio:~
                </span>
            </div>

            <div className="border-t border-slate-700/40" />
        </header>
    )
}