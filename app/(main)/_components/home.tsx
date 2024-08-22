import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import ImageGallery from "./portfolio";

export const HomePage = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-start">
                    My name is <span className="underline font-serif">Brian Kamau</span>
                </h1>
                    <h3 className="text-sm sm:text-base md:text-lg font-small text-start">
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
                        <h4 className=" font-semibold text-start text-3xl mb-4">
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
                        src='https://res.cloudinary.com/dh3g60rue/image/upload/v1724319325/portfolio/me_vlr4a9.jpg'
                        alt="Brian Kamau"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
            <Separator />
            <div>
                <h2 className="flex justify-center font-semibold text-3xl mb-4">
                    About Me
                </h2>
                <p className="flex from-accent-foreground text-start">
                I excel at automating security measures, implementing advanced security protocols 
                and continuously monitoring for potential vulnerabilities. Additionally, I am proficient in 
                integrating third-party services to enhance functionality and streamline workflows. 
                My comprehensive approach ensures the creation of secure, efficient, and scalable infrastructures 
                that support agile and effective software delivery. Committed to protecting organizations from cyber threats, 
                I strive to enhance security while maintaining the speed and flexibility of modern development practices.
                </p>
            </div>
            <div>
                <h2 className="flex font-semibold text-3xl justify-center mb-4">
                    My Portfolio
                </h2>
                <div className="flex flex-row sm:flex-row justify-center gap-8 container mx-auto">
                    <ImageGallery />
                </div>
            </div>
            <Separator />
            <div>
                <h2 className="text-3xl font-semibold justify-center">
                    Message to My Clients
                </h2>
                <div className="italic font-semibold">
                    <h3 className="text-start mb-2">
                        Dear Client,
                    </h3>
                    <p className="justify-start font-sans text-start mb-2">
                    I am committed to enhancing your development processes with robust security, efficient operations 
                    and exceptional web design. By automating security measures, implementing advanced protocols and 
                    crafting visually appealing, user-friendly websites, I ensure your systems remain secure and effective. 
                    Let’s work together to achieve your business goals. Hire me to safeguard, streamline and beautify your projects.
                    </p>
                    <h2 className="text-start">
                        Sincerely, <br />
                        Brian Kamau.
                    </h2>
                </div>
            </div>
        </div>
    )
}