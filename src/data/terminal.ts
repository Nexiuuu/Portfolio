import type { TerminalEntry } from "@/types/terminal";

export const terminalHistory: TerminalEntry[] = [
    { id: "whoami-command", type: "command", text: ["whoami"] },
    { id: "alan-output", type: "output", text: ["Alan"] },

    { id: "role-command", type: "command", text: ["role"] },
    { id: "frontend-developer-output", type: "output", text: ["Frontend Developer"] },

    { id: "stack-command", type: "command", text: ["stack"] },
    { id: "stacks-output", type: "output", text: [
        "React • ", 
        "TypeScript • ", 
        "Tailwind CSS",
        ] 
    },

    { id: "status-command", type: "command", text: ["status"] },
    { id: "status-output", type: "output", text: ["Available for work"] },
];