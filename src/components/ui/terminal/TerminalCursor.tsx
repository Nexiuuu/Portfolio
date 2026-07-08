export const TerminalCursor = () => {
    return (
        <div className="flex items-center px-4 py-3 gap-1.5">
            <span className="text-emerald-400 font-bold select-none">$</span>

            <span className="
                font-mono
                text-slate-200
                animate-[blink_1s_steps(2,start)_infinite]
                "
            >
                █
            </span>
        </div>
    )
}