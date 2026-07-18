import type { LucideIcon } from "lucide-react";

export interface Contact {
    id: number;
    title: string;
    value: string;
    href: string;
    icon: LucideIcon;
}