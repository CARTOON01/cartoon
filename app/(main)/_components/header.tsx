import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return ( 
        
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6"
        )}>
            <Logo />
                <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                    <Button variant="ghost" size="sm">
                        About Me
                    </Button>
                    <Button variant="ghost" size="sm">
                        Portfolio
                    </Button>
                    <Button variant="ghost" size="sm">
                        Contact Me
                    </Button>
            </div>
        </div>
     );
}
