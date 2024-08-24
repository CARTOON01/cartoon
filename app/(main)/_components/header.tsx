import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { MenuButton } from "./menu-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 w-full"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="link" className="text-sm font-medium hover:text-black">About Me</Button>
                        <Button variant="link" className="text-sm font-medium hover:text-black">Portfolio</Button>
                        <Button variant="link" className="text-sm font-medium hover:text-black">Contact</Button>
                    </div>
                    <div className="md:hidden">
                        <MenuButton />
                    </div>
                </div>
            </div>
        </div>
    );
}