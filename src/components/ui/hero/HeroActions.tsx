import { Button } from "@/components/ui/button/Button";
import { heroButtons } from "@/data/hero";

export const HeroActions = () => {
    return (
        <div className="
            flex 
            flex-col
            gap-4

            sm:flex-row
          "
        >
            {heroButtons.map((button) => (
                <Button key={button.id} {...button} />
            ))}
        </div>
    )
}