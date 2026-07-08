export const TerminalHeader = () => {
    return (
        <div>
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm" />
                    <span className="h-3 w-3 rounded-full bg-green-500 shadow-sm" />
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

            <div className="border-t border-slate-800" />
        </div>
    )
}