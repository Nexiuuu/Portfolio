export interface TerminalEntry {
    id: string;
    type: "command" | "output";
    text: string[]
}