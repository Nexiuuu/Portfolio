import type { Contact } from "@/types/contact";

export const ContactCard = ({
    title, 
    value,
    href,
    icon: Icon,
}: Contact) => {    
    const isEmail = href.startsWith("mailto:");

    return (
        <a
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="
                group
                block
                cursor-pointer

                rounded-2xl
                border
                border-slate-800

                bg-slate-900/50
                
                p-6
                
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-slate-700
                hover:shadow-xl
                hover:shadow-slate-950/50

                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                focus:ring-offset-2
                focus:ring-offset-slate-950
            "
        >
            <div className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl
                
                border
                border-blue-400/20

                bg-blue-400/10

                transition-all
                duration-300

                group-hover:bg-blue-400/20
              "
            >
                <Icon className="
                    h-6 
                    w-6 
                    text-blue-400

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  " 
                />
            </div>

            <h3 className="text-lg font-semibold text-slate-100">
                {title}
            </h3>

            <p className="mt-2 text-sm text-slate-300 break-all">
                {value}
            </p>
        </a>
    );
};