import { Separator } from "@radix-ui/react-separator"

export const Footer = () => {
    return (
        <div>
            <Separator className="my-8"/>
            <p className="text-sm text-pretty justify-center text-center pt-2 pb-4">
               Copyright &copy; 2024 Brian Kamau. All Rights Reserved
            </p>
        </div>
    )
}