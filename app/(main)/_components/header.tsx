import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { MenuButton } from "./menu-button";
import Link from "next/link";

export const Header = () => {
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 w-full"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="#" className="text-sm font-medium hover:text-gray-300">About</Link>
                        <Link href="#" className="text-sm font-medium hover:text-gray-300">Portfolio</Link>
                        <Link href="#" className="text-sm font-medium hover:text-gray-300">Contact</Link>
                    </div>
                    <div className="md:hidden">
                        <MenuButton />
                    </div>
                </div>
            </div>
        </div>
    );
}