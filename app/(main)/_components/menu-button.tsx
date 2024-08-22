import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

export const MenuButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MenuIcon size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="#">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="#">Portfolio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="#">Contact</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}