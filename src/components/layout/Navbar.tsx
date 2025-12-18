"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: [0.1, 0.25, 0.5, 0.75, 0.9]
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // We need to determine which section is *most* visible
            const visibleSections = new Map<string, number>();

            // Get current viewport visibility for all observed sections
            document.querySelectorAll('section[id]').forEach(section => {
                const rect = section.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Calculate visible height
                const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
                const visibleRatio = Math.max(0, visibleHeight / viewportHeight); // Ratio relative to viewport height

                if (visibleHeight > 0) {
                    visibleSections.set(section.id, visibleRatio);
                }
            });

            // Find the section with the largest visible ratio
            let maxRatio = 0;
            let maxId = activeSection;

            visibleSections.forEach((ratio, id) => {
                if (ratio > maxRatio) {
                    maxRatio = ratio;
                    maxId = id;
                }
            });

            if (maxRatio > 0.1) { // Threshold to switch
                setActiveSection(maxId);
            }
        };

        // Note: IntersectionObserver callback fires on changes.
        // For accurate tracking of "most visible", standard IO needs careful logic.
        // Simpler approach: On any change, re-evaluate all sections' bounding clients relative to viewport.
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []); // Removed activeSection dep to avoid re-binding, logic uses DOM 

    useEffect(() => {
        const activeIndex = navItems.findIndex(item => item.href.substring(1) === activeSection);
        if (activeIndex !== -1 && navRefs.current[activeIndex]) {
            const element = navRefs.current[activeIndex];
            if (element) {
                setPillStyle({
                    left: element.offsetLeft,
                    width: element.offsetWidth,
                    opacity: 1
                });
            }
        } else {
            setPillStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [activeSection]);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        const element = document.querySelector(id) as HTMLElement;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="py-2 fixed top-0 left-0 right-0 z-30">
            <div className="px-8 md:px-[100px] relative">
                <nav className="glassy rounded-full relative flex justify-center items-center md:grid md:grid-cols-3 p-2">
                    <a href="#home" onClick={(e) => scrollTo(e, '#home')} id="header-logo"
                        className="font-noxlock text-4xl tracking-wider md:justify-self-start cursor-pointer transition-colors hover:text-primary">ZA</a>

                    <div className="hidden md:flex items-center space-x-2 justify-self-center relative">
                        {/* Sliding Pill */}
                        <div
                            className="absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300 ease-out z-0"
                            style={{
                                left: `${pillStyle.left}px`,
                                width: `${pillStyle.width}px`,
                                opacity: pillStyle.opacity
                            }}
                        />

                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                ref={el => { navRefs.current[index] = el }}
                                href={item.href}
                                onClick={(e) => scrollTo(e, item.href)}
                                className={cn(
                                    "nav-link relative z-10 px-5 py-3 rounded-full transition-colors duration-300 text-sm font-medium",
                                    activeSection === item.href.substring(1) ? "text-white font-bold" : "text-white/60 hover:text-white"
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
