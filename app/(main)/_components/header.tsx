import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { MenuButton } from "./menu-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrolled } from "@/hooks/scroll";

export const Header = () => {
    const scrolled = useScrolled();

    return (
        <div className={cn(
            "z-50 fixed top-0 w-full transition-all duration-300",
            scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-background"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/about">
                            <Button variant="link" className="text-sm font-medium hover:text-black">About Me</Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="link" className="text-sm font-medium hover:text-black">Portfolio</Button>
                        </Link>
                        <Link href="/contact">
                        <Button variant="link" className="text-sm font-medium hover:text-black">Contact</Button>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <MenuButton />
                    </div>
                </div>
            </div>
        </div>
    );
}