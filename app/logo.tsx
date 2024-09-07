import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center space-x-2">
            <Image
                src="/logo.png"
                height="88"
                width="88"
                alt="logo"
            />
        </Link>
    )
}