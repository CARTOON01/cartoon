import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6"
        )}>
            <Logo />
            <div className="md:hidden ml-auto">
            </div>
            <div className="md:flex md:ml-auto md:justify-end justify-between w-full flex-col md:flex-row items-center gap-y-4 md:gap-x-2 absolute md:relative top-full left-0 right-0 bg-background dark:bg-[#1F1F1F] md:bg-transparent p-4 md:p-0">
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