import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { MenuButton } from "./menu-button";
import Link from "next/link";

export const Header = () => {
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6"
        )}>
            <Logo />
            <div className="hidden md:flex ml-auto items-center gap-x-4">
                <Link href="#" className="text-sm font-medium">About</Link>
                <Link href="#" className="text-sm font-medium">Portfolio</Link>
                <Link href="#" className="text-sm font-medium">Contact</Link>
            </div>
            <div className="md:hidden ml-auto">
                <MenuButton />
            </div>
        </div>
    );
}