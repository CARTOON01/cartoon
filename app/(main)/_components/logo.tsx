import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-x-2">
            <Image
                src="/logo.png"
                height="40"
                width="40"
                alt="logo"
            />
        </Link>
    )
}