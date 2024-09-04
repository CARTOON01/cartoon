import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

export const MenuButton = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon size={24} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href="/about">About</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/portfolio">Portfolio</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/contact">Contact</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}