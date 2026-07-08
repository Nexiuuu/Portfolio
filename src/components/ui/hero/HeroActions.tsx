import { Button } from "@/components/ui/button/Button";
import { heroButtons } from "@/data/hero";

export const HeroActions = () => {
    return (
        <div className="flex gap-4">
            {heroButtons.map((button) => (
                <Button key={button.id} {...button} />
            ))}
        </div>
    )
}