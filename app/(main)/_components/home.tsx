"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import ImageGallery from "./portfolio";
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { TfiInstagram } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/components/data/resume";

const BLUR_FADE_DELAY = 0.04;

export const HomePage = () => {
    const verifyRecaptcha = async () => {
        try {
            const token = await (window as any).grecaptcha.execute('YOUR_SITE_KEY', { action: 'submit' });
            const response = await fetch('/api/verify-recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });
            const data = await response.json();
            if (data.success) {
                console.log('reCAPTCHA verification successful');
            } else {
                console.error('reCAPTCHA verification failed');
            }
        } catch (error) {
            console.error('Error verifying reCAPTCHA:', error);
        }
    };

    useEffect(() => {
        verifyRecaptcha();
    }, []);

    return (
        <div className="max-w-6xl mx-auto pt-2 sm:pt-4 md:pt-6 lg:pt-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm Brian Kamau`}
              />
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
                        <h4 className=" font-semibold text-start text-3xl lg:mb-4 md:mb-4 sm:mb-2">
                            Connect with Me
                        </h4>
                        <div className="flex justify-start gap-2">
                            <a href="https://www.linkedin.com/in/brianngugi">
                                <CiLinkedin size="35" color="#0077B5" />
                            </a>
                            <a href="https://instagram.com/itsngugi_1">
                                <TfiInstagram size="30" color="#E4405F" />
                            </a>
                            <a href="https://x.com/ItNgugi">
                                <FaSquareXTwitter size="30" color="#000000" />
                            </a>
                            <a href="https://github.com/CARTOON01">
                                <VscGithub size="30" color="#000000" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative aspect-square md:aspect-auto md:h-full">
                    <Image
                        src='https://res.cloudinary.com/dh3g60rue/image/upload/v1724319325/portfolio/me_vlr4a9.jpg'
                        alt="Brian Kamau"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>
            </div>
            <Separator className="my-8"/>
            <div className="md:mb-8 lg:mb-8 sm:mb-2">
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
            <div className="mb-8 py-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                    <ImageGallery />
                    <div className="flex justify-center mt-8">
                        <Link href="/portfolio">
                            <Button variant="secondary">
                                View More Items
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Separator className="my-8 bg-black"/>
            <div className="mb-8">
                <h2 className="text-3xl font-semibold justify-center">
                    Message to My Clients
                </h2>
                <div className="italic">
                    <h3 className="text-start mb-2 font-semibold">
                        Dear Client,
                    </h3>
                    <p className="justify-start font-sans text-start mb-2">
                    I am committed to enhancing your development processes with robust security, efficient operations 
                    and exceptional web design. By automating security measures, implementing advanced protocols and 
                    crafting visually appealing, user-friendly websites, I ensure your systems remain secure and effective. 
                    Let's work together to achieve your business goals. Hire me to safeguard, streamline and beautify your projects.
                    </p>
                    <h2 className="text-start font-semibold">
                        Sincerely, <br />
                        Brian Kamau.
                    </h2>
                </div>
            </div>
            <Separator className="my-8 bg-black"/>
            <p className="italic text-center font-serif">Secure, efficient, and beautifully designed systems are not just goals, they are standards.</p>
        </div>
    )
}