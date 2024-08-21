import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export const Header = () => {
    return ( 
        
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6"
        )}>
            <Logo />
        </div>
     );
}
