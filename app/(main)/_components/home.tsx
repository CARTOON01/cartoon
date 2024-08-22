import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const HomePage = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-3xl font-semibold text-start">
                    My name is <span className="underline font-serif">Brian Kamau</span>
                </h1>
                    <h3 className="text-base sm:text-sm md:text-lg font-small text-start">
                        As a DevSecOps engineer, I specialize in integrating robust security practices into the DevOps pipeline. 
                        With a diverse technical skillset encompassing NextJS, GitHub, MongoDB, MySQL, TailwindCSS, Python, Flask, 
                        JavaScript, NodeJS, and HTML, I excel at automating security measures, implementing advanced protocols, 
                        and seamlessly integrating third-party services to enhance functionality and streamline workflows. 
                        My expertise in web design ensures that I create not only secure but also visually appealing and user-friendly interfaces. 
                        My comprehensive approach ensures the creation of secure, efficient, and scalable infrastructures that support agile and 
                        effective software delivery. Committed to protecting organizations from cyber threats, I leverage my skills in both security 
                        and web design to enhance system integrity while meeting modern development demands.
                    </h3>
                    <div>
                        <h4 className=" font-semibold text-start mb-4">
                            Connect with Me
                        </h4>
                        <div className="flex justify-start gap-2">
                            <a href="https://www.linkedin.com/in/brianngugi">
                                <FaLinkedinIn size="30" color="#0077B5" />
                            </a>
                            <a href="https://instagram.com/itsngugi_1">
                                <FaInstagram size="30" color="#E4405F" />
                            </a>
                            <a href="https://x.com/ItNgugi">
                                <FaX size="30" color="#000000" />
                            </a>
                            <a href="https://github.com/CARTOON01">
                                <FaGithub size="30" color="#000000" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative aspect-square md:aspect-auto md:h-full">
                    <Image
                        src="/me.jpg"
                        alt="Brian Kamau"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
            <Separator />
            <div>

            </div>
        </div>
    )
}