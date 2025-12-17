"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initial marker position needs to be handled via ref or direct DOM manipulation if dynamic
    // For simplicity in React, we might use active class styling or a motion layout
    // We'll stick to a simpler active state for MVP Rewrite

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[data-scroll-section]');
            let current = 'home';

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id') || 'home';
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="py-4 fixed top-0 left-0 right-0 z-30">
            <div className="px-8 md:px-[100px] relative">
                <nav className="glassy rounded-full relative flex justify-center items-center md:grid md:grid-cols-3 p-4">
                    <a href="#home" onClick={(e) => scrollTo(e, '#home')} id="header-logo"
                        className="font-noxlock text-4xl tracking-wider md:justify-self-start cursor-pointer transition-colors hover:text-primary">ZA</a>

                    <div className="hidden md:flex items-center space-x-2 justify-self-center relative rounded-full p-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollTo(e, item.href)}
                                className={cn(
                                    "nav-link relative z-10 px-5 py-2 rounded-full transition-colors duration-300",
                                    activeSection === item.href.substring(1) ? "bg-primary text-white font-bold" : "text-white/80 hover:text-white"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block justify-self-end"></div>

                    <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <div id="mobile-menu"
                        className="md:hidden absolute top-full right-8 mt-2 w-auto glassy rounded-[25px] py-[25px] px-[50px] flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollTo(e, item.href)}
                                className={cn(
                                    "mobile-nav-link block text-lg py-2 text-center",
                                    activeSection === item.href.substring(1) ? "text-primary font-bold" : "text-white"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
