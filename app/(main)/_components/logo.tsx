import Image from "next/image";

export const Logo = () => {

    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/logo.png"
                height="100"
                width="100"
                alt="logo"
            />
        </div>
    )
}