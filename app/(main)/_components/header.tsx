"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "./logo";
import { MenuButton } from "./menu-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 80) { 
            setIsScrolled(true); 
          } else {
            setIsScrolled(false); 
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={`z-50 fixed top-0 w-full transition-all duration-300 &{
            isScrolled
                ? 'bg-white/30 backdrop-blur-lg border-b border-gray-300 shadow-md'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/about">
                            <Button variant="link" className="text-sm font-medium hover:text-black">About Me</Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="link" className="text-sm font-medium hover:text-black">Portfolio</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="link" className="text-sm font-medium hover:text-black">Contact</Button>
                        </Link>
                        <ModeToggle />
                    </div>
                    <div className="md:hidden flex justify-between items-center">
                        <ModeToggle />
                        <MenuButton />
                    </div>
                </div>
            </div>
        </div>
    );
}