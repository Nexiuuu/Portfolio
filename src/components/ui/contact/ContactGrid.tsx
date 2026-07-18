import { ContactCard } from "./ContactCard";
import { contactLinks } from "@/data/contact";

export const ContactGrid = () => {
    return (
        <div className="
            mt-12
            grid
            gap-6
            md:grid-cols-3
          "
        >
            {contactLinks.map((link) => (
                <ContactCard 
                    key={link.id} 
                    {...link} 
                />
            ))}
        </div>
    );
};