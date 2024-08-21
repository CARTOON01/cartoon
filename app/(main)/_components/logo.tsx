import Image from "next/image";

export const Logo = () => {

    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/logo.png"
                height="40"
                width="40"
                alt="logo"
            />
            <p className="font-semibold">
                Brian Ngugi
            </p>
        </div>
    )
}